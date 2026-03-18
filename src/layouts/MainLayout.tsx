import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919890002239?text=Hello%20SP%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20industrial%20flooring."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{ position: 'fixed', bottom: '28px', right: '24px', zIndex: 9999 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:bg-[#1ebe5c] transition-colors"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.738 5.469 2.031 7.769L0 32l8.469-2.219A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0Zm8.406 22.594c-.344.969-2.013 1.844-2.75 1.906-.706.063-1.375.313-4.625-1.063-3.906-1.656-6.344-5.656-6.531-5.906-.188-.25-1.5-2-1.5-3.813s.969-2.688 1.313-3.063c.344-.375.75-.469 1-.469.25 0 .5 0 .719.006.219.006.531-.094.844.625.313.719 1.063 2.563 1.156 2.75.094.188.156.406.031.656-.125.25-.188.406-.375.625-.188.219-.406.5-.563.656-.188.188-.375.406-.156.781.219.375.969 1.594 2.094 2.594 1.438 1.281 2.656 1.688 3.031 1.875.375.188.594.156.813-.094.219-.25.938-1.094 1.188-1.469.25-.375.5-.313.844-.188.344.125 2.188 1.031 2.563 1.219.375.188.625.281.719.438.094.156.094.906-.25 1.875Z"/>
        </svg>
      </a>
    </div>
  );
}


