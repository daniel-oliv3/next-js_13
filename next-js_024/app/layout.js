import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css'

// Components
import Navbar from './components/Navbar';




export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>

        <Navbar />

        {children}
      </body>
    </html>
  )
}
