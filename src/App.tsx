import { BrowserRouter, Routes, Route } from 'react-router'
import { HomePage } from './pages/Home'
import { EstatePage } from './pages/EstatePage'
import { EstateDetails } from './pages/EstateDetailsPage'
import { ContactPage } from './pages/ContactPage'
import { Dashboard } from './pages/Dashboard'
import { LoginPage } from './pages/LoginPage'
import { SearchResult } from './pages/SearchResultPage'
import { MainLayout } from './layouts/MainLayout'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/estate" element={<EstatePage />} />
          <Route path="/estate/:id" element={<EstateDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/searchresult" element={<SearchResult />} />
          <Route path="*" element={<h1>404 Page NOT FOUND</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
