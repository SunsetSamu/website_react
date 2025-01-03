// import { Link } from 'react-router-dom'
import '../styles/profile.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="profile-page">
      {children}
    </div>
  )
}

