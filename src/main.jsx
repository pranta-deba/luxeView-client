import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import AuthProvider from './providers/auth/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async';
import CartProvider from './providers/cart/CartProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
          <Toaster
            position="top-left"
            reverseOrder={false}
          />
        </HelmetProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
