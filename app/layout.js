import "../styles/global.css"
import { Toaster } from "react-hot-toast";


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
      <Toaster position="bottom-center" />
        {children}</body>
    </html>
  )
}
