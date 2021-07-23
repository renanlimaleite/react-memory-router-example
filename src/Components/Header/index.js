import { Link } from 'react-router-dom'

export function Header() {
  return (
    <ul>
      <li><Link to='/about'><button>About</button></Link></li>
      <li><Link to='/features'><button>Features</button></Link></li>
    </ul>
  )
}