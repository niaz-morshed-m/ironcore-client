import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import { AuthProvider } from './contexts/AuthContext'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata = {
  title: 'IronCore Fitness | Premium Gym Gear',
  description: 'Elevate your performance with professional-grade fitness equipment designed for champions. Quality you can trust, results you can feel.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 ${spaceGrotesk.variable}`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}