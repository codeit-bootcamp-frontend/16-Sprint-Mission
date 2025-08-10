import '@/app/globals.css';
import Script from 'next/script';

import Gnb from '@/components/Gnb';
import QueryProvider from '@/components/QueryProvider';
import * as gtag from '@/lib/gtag';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        {/* Google tag (gtag.js)*/}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        ></Script>
        <Script
          id='gtag'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
          }}
        />

        <QueryProvider>
          <Gnb />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
