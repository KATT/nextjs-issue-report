import Link from 'next/link'

export const Nav = () => {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link> 
      <Link href="/about"><a>About</a></Link>
    </nav>
  )
}