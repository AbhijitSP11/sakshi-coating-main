import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import ContactPage from '../pages/ContactPage';
import EnquiryPage from '../pages/EnquiryPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}


