import Script from 'next/script';

const MetaPixelTracker = () => {
  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive" // Use afterInteractive for external scripts
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          `,
        }}
      />
      <Script
        id="facebook-pixel-init"
        strategy="afterInteractive" // Ensure this runs after the main script
        dangerouslySetInnerHTML={{
          __html: `
            fbq('init', '680562781420149');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
};

export default MetaPixelTracker;