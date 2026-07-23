const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const tempPath = fullPath + '.tmp';
        try {
          let pipeline = sharp(fullPath);
          const metadata = await pipeline.metadata();
          
          if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
          } else if (ext === '.png') {
            pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
          }
          
          await pipeline.toFile(tempPath);
          
          const oldSize = stat.size;
          const newSize = fs.statSync(tempPath).size;
          
          if (newSize < oldSize) {
            fs.renameSync(tempPath, fullPath);
            console.log(`Compressed ${file}: ${(oldSize / 1024).toFixed(2)}KB -> ${(newSize / 1024).toFixed(2)}KB`);
          } else {
            fs.unlinkSync(tempPath);
            console.log(`Skipped ${file}: Compression would increase size.`);
          }
        } catch (error) {
          console.error(`Error processing ${file}:`, error);
          if (fs.existsSync(tempPath)) {
            fs.unlinkSync(tempPath);
          }
        }
      }
    }
  }
}

processDirectory(publicDir).then(() => {
  console.log('Image compression completed.');
}).catch(console.error);
