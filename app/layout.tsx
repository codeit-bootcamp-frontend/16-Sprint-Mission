import './globals.css';
import Gnb from '@/components/Gnb';
import QueryProvider from '@/components/QueryProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <QueryProvider>
          <Gnb />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
