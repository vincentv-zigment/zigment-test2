import Script from 'next/script';

function FacebookScript() {
    return (
        <>
            <Script id="fb-pixel-scrips-id">
                {`
        !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '609725497530389');
          fbq('track', 'PageView');
        `}
            </Script>
            <Script
                strategy="lazyOnload"
                src="https://www.facebook.com/tr?id=609725497530389&ev=PageView&noscript=1"
            />
        </>
    )
}

export default FacebookScript