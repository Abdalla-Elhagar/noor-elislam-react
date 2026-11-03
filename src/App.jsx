import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'

// كل صفحة في chunk منفصل بيتحمل لما المستخدم يدخلها
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const Offers = lazy(() => import('./pages/Offers'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="offers" element={<Offers />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
