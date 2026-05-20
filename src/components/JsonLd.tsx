export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://solvextechnology.in/#organization",
        name: "Solvex Technology",
        url: "https://solvextechnology.in",
        logo: "https://solvextechnology.in/favicon.svg",
        description: "A professional digital solutions company providing complete online growth services for businesses and startups.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kaushalya Bhawan, Sonbarsa",
          addressLocality: "Sitamarhi",
          addressRegion: "Bihar",
          postalCode: "843330",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@solvextechnology.in",
          telephone: "+91-9311910636",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          "https://facebook.com/solvextechnology",
          "https://twitter.com/solvextech",
          "https://instagram.com/solvextechnology",
          "https://linkedin.com/company/solvextechnology",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://solvextechnology.in/#website",
        url: "https://solvextechnology.in",
        name: "Solvex Technology",
        publisher: { "@id": "https://solvextechnology.in/#organization" },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://solvextechnology.in/#professionalservice",
        name: "Solvex Technology",
        image: "https://solvextechnology.in/og-image.png",
        url: "https://solvextechnology.in",
        email: "support@solvextechnology.in",
        telephone: "+91-9311910636",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kaushalya Bhawan, Sonbarsa",
          addressLocality: "Sitamarhi",
          addressRegion: "Bihar",
          postalCode: "843330",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "26.5938",
          longitude: "85.4897",
        },
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "18:00",
          }
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
