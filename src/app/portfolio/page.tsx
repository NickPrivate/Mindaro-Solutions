import Link from 'next/link'

export const metadata = {
  title: 'Portfolio - Mindaro Solutions',
  description: 'Explore our portfolio of successful AI software projects, custom web applications, and digital transformation solutions.',
}

export default function PortfolioPage() {
  return (
    <div className="bg-dark-950 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-100 mb-4">Portfolio Coming Soon</h1>
        <p className="text-gray-300 mb-8">
          We're currently building our portfolio of real projects. Check back soon!
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
} 