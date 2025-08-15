import '@/app/globals.css';
import Script from 'next/script';

import Gnb from '@/components/Gnb';
import QueryProvider from '@/components/QueryProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <head>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <Script
          id='gtm'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MLCFLVF2');`,
          }}
        ></Script>
      </head>

      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={'https://www.googletagmanager.com/ns.html?id=GTM-MLCFLVF2'}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <QueryProvider>
          <Gnb />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
