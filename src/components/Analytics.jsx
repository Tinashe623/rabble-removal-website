import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const Analytics = ({ 
  ga4Id = null, 
  facebookPixelId = null 
}) => {
  useEffect(() => {
    // Initialize Google Analytics 4
    if (ga4Id) {
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ga4Id}');
      `
      document.head.appendChild(script2)
    }

    // Initialize Facebook Pixel
    if (facebookPixelId) {
      const script = document.createElement('script')
      script.textContent = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${facebookPixelId}');
        fbq('track', 'PageView');
      `
      document.head.appendChild(script)

      // Facebook Pixel No Script
      const noscript = document.createElement('noscript')
      noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1" />`
      document.body.appendChild(noscript)
    }
  }, [ga4Id, facebookPixelId])

  return null
}

// Track conversion events
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined') {
    // GA4 event
    if (window.gtag) {
      window.gtag('event', eventName, params)
    }
    // Facebook Pixel event
    if (window.fbq) {
      window.fbq('track', eventName, params)
    }
  }
}

// Pre-defined events
export const trackQuoteRequest = () => trackEvent('generate_lead', {
  method: 'quote_form'
})

export const trackPhoneCall = () => trackEvent('click', {
  category: 'contact',
  label: 'phone_call'
})

export const trackWhatsAppClick = () => trackEvent('click', {
  category: 'contact',
  label: 'whatsapp'
})

export default Analytics