import Logout from '<nextjs>/components/Logout'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <nav className=' absolute bg-gray-700 p-8'>

            <Link className="text-2xl font-bold text-white" href={'/'}>
                Notes
            </Link>
        </nav>
        <div>
            {children}
        </div>
        
      </div>
  )
}
