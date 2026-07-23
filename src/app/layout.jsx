import '../styles/App.css'

export const metadata = {
  title: "Gowtham's Portfolio",
  description: "Gowtham Kumar's portfolio showcasing projects, skills, and contact information.",
  keywords: "Frontend Developer, Portfolio, Gowtham Kumar, Web Developer",
  authors: [{ name: "Gowtham Kumar" }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <link href='https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
