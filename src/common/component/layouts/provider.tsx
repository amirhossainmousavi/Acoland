import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
// import TagManager from 'react-gtm-module';
import { Toaster } from 'react-hot-toast';

const Provider = ({ children }: { children: React.ReactNode;}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            retry: false,
          },
        },
      }),
  );

  useEffect(() => {
    // TagManager.initialize({
    //   gtmId: 'GTM-P5RPLDP',
    // });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
            {children}
      <Toaster
        position="top-left"
        toastOptions={{
          style: {
            padding: '1rem',
          },
          duration: 3000,
        }}
      />
    </QueryClientProvider>
  );
};

export default Provider;
