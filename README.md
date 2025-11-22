# 🚀 Gowtham Kumar's Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Built with React, Vite, and enhanced with beautiful animations using Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.2.4-purple) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.24-pink)

## ✨ Features

### 🎨 **Modern UI/UX**
- Fully responsive design that works seamlessly on all devices
- Smooth scroll animations and transitions
- Interactive hover effects and micro-interactions
- Dark theme with gradient accents
- Glassmorphism effects and backdrop blur

### 🎭 **Advanced Animations**
- **3D Tilt Effect**: Profile picture responds to mouse movement
- **Animated Particles**: 50 floating particles in the background
- **Scroll Reveal Animations**: Elements animate as you scroll
- **Staggered Animations**: Sequential animations for lists and grids
- **Smooth Transitions**: Cubic-bezier easing for natural motion
- **Active Section Detection**: Navigation highlights current section

### 📱 **Sections**
- **Home**: Hero section with animated typing effect and social links
- **About**: Personal introduction with statistics and achievements
- **Services**: Showcase of development services offered
- **Skills**: Technical and professional skills with animated progress bars
- **Projects**: Portfolio projects with filtering and hover effects
- **Education**: Academic background and certifications
- **Contact**: Contact form with validation and social media links

### 🛠️ **Technical Features**
- Fast page loads with Vite build tool
- Optimized animations with Framer Motion
- SEO-friendly meta tags
- Accessible design with reduced motion support
- Smooth scrolling navigation
- Scroll-to-top button

## 🛠️ Technologies Used

### Core
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.9.6** - Routing (if needed)

### Animation & Effects
- **Framer Motion 12.23.24** - Advanced animations and gestures
- **Typed.js 2.1.0** - Typing animation effect

### Styling
- **CSS3** - Custom styling with CSS variables
- **Boxicons** - Icon library
- **Google Fonts (Poppins)** - Typography

### Development Tools
- **ESLint** - Code linting
- **Vite Plugin React** - React support for Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gowtham310106/2026-portfolio.git
   cd 2026-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## 📁 Project Structure

```
2026-portfolio/
├── public/
│   ├── plazo.jpeg          # Profile image
│   └── vite.svg            # Favicon
├── src/
│   ├── components/
│   │   ├── About.jsx       # About section component
│   │   ├── Contact.jsx     # Contact form component
│   │   ├── Education.jsx   # Education section
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Home.jsx        # Hero/home section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── ScrollToTop.jsx # Scroll to top button
│   │   ├── Services.jsx    # Services section
│   │   └── Skills.jsx      # Skills section
│   ├── styles/
│   │   ├── About.css
│   │   ├── App.css         # Global styles and variables
│   │   ├── Contact.css
│   │   ├── Education.css
│   │   ├── Header.css
│   │   ├── Home.css
│   │   ├── Projects.css
│   │   ├── ScrollToTop.css
│   │   ├── Services.css
│   │   └── Skills.css
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Key Features Explained

### Animation System
The portfolio uses Framer Motion for all animations, providing:
- **Spring Physics**: Natural, bouncy animations
- **Gesture Support**: Hover, tap, and drag interactions
- **Layout Animations**: Smooth transitions when elements change
- **Scroll Animations**: Elements animate into view on scroll

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Touch-friendly interactions
- Optimized images and assets

### Performance Optimizations
- Code splitting with Vite
- Lazy loading for images
- Optimized animation performance
- Minimal bundle size

## 🎨 Customization

### Colors
Edit CSS variables in `src/styles/App.css`:
```css
:root {
  --primary-color: #00abf0;
  --secondary-color: #112e42;
  --bg-color: #081b29;
  --text-color: #ededed;
  --accent-color: #ff6b6b;
  --gradient: linear-gradient(135deg, #00abf0, #ff6b6b);
}
```

### Content
- Update personal information in respective component files
- Modify projects in `src/components/Projects.jsx`
- Update skills in `src/components/Skills.jsx`
- Change social links in `src/components/Home.jsx` and `src/components/Contact.jsx`

### Images
Replace `public/plazo.jpeg` with your profile image and update image paths in components.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Gowtham310106/2026-portfolio/issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Gowtham Kumar**

- GitHub: [@Gowtham310106](https://github.com/Gowtham310106)
- LinkedIn: [Gowtham Kumar](https://www.linkedin.com/in/gowtham-kumar-260080332/)
- Email: gowtham310106@gmail.com
- Phone: +91 9789502278

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animation library
- [Typed.js](https://github.com/mattboldt/typed.js/) for typing animation
- [Boxicons](https://boxicons.com/) for beautiful icons
- [Google Fonts](https://fonts.google.com/) for Poppins font
- [Vite](https://vitejs.dev/) for blazing fast build tool

---

⭐ If you like this project, please give it a star on GitHub!
