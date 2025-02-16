import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          {Object.entries(
            import.meta.glob('./components/subpages/*.tsx', { eager: true }) as Record<
              string,
              { default: React.ComponentType<any> }
            >
          ).map(([filePath, module]) => {
            const fileName = filePath.split('/').pop()?.replace('.tsx', '');
            return <Route key={fileName} path={`/${fileName}`} element={<module.default />} />;
          })}
          <Route path="*" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

