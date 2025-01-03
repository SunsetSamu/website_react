import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

