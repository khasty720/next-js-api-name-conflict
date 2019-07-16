import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/alert-test">
          <a style={linkStyle}>Alert Test</a>
        </Link>
        <Link href="/api-test">
          <a style={linkStyle}>API Test</a>
        </Link>
    </div>
)

export default Header
