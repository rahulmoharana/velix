import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "VELIX - Web & Software Development Company in Bhubaneswar | Custom Solutions", 
  description = "VELIX offers premium web development, software solutions, and mobile app development in Bhubaneswar, Odisha. We deliver custom digital solutions at scale.",
  keywords = "Web development company in Bhubaneswar, Software development agency Bhubaneswar, Website design services Odisha, Custom software solutions Bhubaneswar, Mobile app development Bhubaneswar, E-commerce website development Odisha, Digital solutions Bhubaneswar, React.js development Bhubaneswar, Node.js development India, Cloud solutions Odisha, Enterprise software development, API development services",
  url = "https://www.velixinfo.tech/",
  image = "https://www.velixinfo.tech/og-image.jpg",
  schema
}) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VELIX",
    "url": "https://www.velixinfo.tech",
    "logo": "https://www.velixinfo.tech/logo.webp",
    "description": "Leading Web and Software Development Company in Bhubaneswar providing custom digital solutions.",
    "sameAs": [
      "https://twitter.com/velixtech",
      "https://linkedin.com/company/velixtech",
      "https://instagram.com/velixtech"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Infocity, Patia",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751024",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-824-904-0033",
      "contactType": "sales",
      "email": "velixtechsolutions@gmail.com"
    }
  };

  const currentSchema = schema || organizationSchema;
  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(currentSchema)}
      </script>
    </Helmet>
  );
};
