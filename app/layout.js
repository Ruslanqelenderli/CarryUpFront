import "../styles/global.css"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/inter@3.15.4/css/inter.css" />
      <body >{children}</body>
    </html>
  )
}
