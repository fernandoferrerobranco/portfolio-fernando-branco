import { RouterProvider } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { router } from './routes';

export default function App() {
  return (
    <>
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
    </>
  );
}