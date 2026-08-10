import { BrowserRouter, Routes, Route } from 'react-router'
import { HomePage } from './Components/pages/Home'
import { EstatePage } from './Components/pages/EstatePage'
import { EstateDetails } from './Components/pages/EstateDetailsPage'
import { ContactPage } from './Components/pages/ContactPage'
import { Dashboard } from './Components/pages/Dashboard'
import { LoginPage } from './Components/pages/LoginPage'
import { SearchResult } from './Components/pages/SearchResultPage'
import { MainLayout } from './Components/layouts/MainLayout'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
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
