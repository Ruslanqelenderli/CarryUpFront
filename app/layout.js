import "../styles/global.css"
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "CarryUp",
  description: "CarryUp1",
  icons: {
    icon: "/person.png"
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body >
        <Toaster position="bottom-center" />
        {children}</body>
    </html>
  )
}
