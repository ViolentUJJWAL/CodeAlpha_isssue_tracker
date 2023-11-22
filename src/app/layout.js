import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import {UserProvider} from '@/context/store';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Navbar />
          {children}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            draggable
            pauseOnHover
            theme="light"
          />
        </UserProvider>
      </body>
    </html>
  )
}
