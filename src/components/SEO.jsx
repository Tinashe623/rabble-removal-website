import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'Exquisite Energies | TLB Hire & Rubble Removal South Africa',
  description = 'Professional rubble removal, site clearing, and TLB hire services across South Africa. Fast, affordable, reliable. Contact us for same-day service.',
  keywords = 'rubble removal, TLB hire, site clearing, waste disposal, Johannesburg, Pretoria, Gauteng',
  ogImage = '/logo.png',
  url = 'https://tichrubble.co.za'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Exquisite Energies" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Exquisite Energies" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Johannesburg" />
      <meta name="geo.position" content="-26.2041;28.0473" />
      <meta name="ICBM" content="-26.2041, 28.0473" />

      {/* Structured Data - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Exquisite Energies",
          "description": "Professional rubble removal and TLB hire services",
          "telephone": "+27846666978",
          "email": "exerstel@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "91 Dalmation place",
            "addressLocality": "Midrand",
            "addressRegion": "GP",
            "postalCode": "1685",
            "addressCountry": "ZA"
          },
          "openingHours": "Mo-Sa 07:00-18:00",
          "priceRange": "R",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "-26.2041",
              "longitude": "28.0473"
            },
            "geoRadius": "50000"
          },
          "serviceType": [
            "Rubble Removal",
            "Site Clearing",
            "TLB Hire",
            "Waste Disposal"
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEO