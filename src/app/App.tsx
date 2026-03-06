import { RouterProvider } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { router } from './routes';
import { AdminProvider } from './context/AdminContext';
import '../styles/suppress-slick-fonts.css';

export default function App() {
  return (
    <AdminProvider>
      <RouterProvider router={router} />
      <Toaster 
        position="top-right"
        toastOptions={{
          classNames: {
            toast: 'bg-slate-900 border-cyan-500/20',
            title: 'text-white',
            description: 'text-slate-400',
          },
        }}
      />
    </AdminProvider>
  );
}