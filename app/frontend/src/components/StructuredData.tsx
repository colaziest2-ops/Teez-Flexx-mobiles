export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MobilePhoneStore',
    name: 'Teez-Flexx Mobiles',
    description: "South Africa's trusted iPhone specialist. Repair, Buy, Sell, and Custom Covers.",
    url: 'https://teez-flexx-mobiles.vercel.app',
    telephone: '+27743376552',
    email: 'teezflexxmobiles@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8 Coronation Road',
      addressLocality: 'Scottsville',
      addressRegion: 'KwaZulu-Natal',
      postalCode: '3201',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -29.6167,
      longitude: 30.3833,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Card, Instant EFT',
    currenciesAccepted: 'ZAR',
    areaServed: {
      '@type': 'Place',
      name: 'South Africa',
    },
    sameAs: [
      'https://instagram.com/tf_mobiles',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Teez-Flexx Mobiles',
    url: 'https://teez-flexx-mobiles.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://teez-flexx-mobiles.vercel.app/shop?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
