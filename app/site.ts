export const site = {
  url: "https://congreso.directortecnico.com",
  title: "Congreso Virtual EDT 2026",
  description:
    "Tres jornadas online con referentes del fútbol profesional: dirección técnica, preparación física, scouting y gestión de clubes. Charlas en vivo y certificado EDT.",
  image: "/thumbnail-social.jpg",
  imageAlt: "Congreso Virtual EDT 2026 — Escuela de Dirección Técnica",
  organizer: "Escuela EDT",
  organizerUrl: "https://directortecnico.com",
} as const;

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${site.organizerUrl}/#organization`,
      name: site.organizer,
      alternateName: "Escuela de Dirección Técnica",
      url: site.organizerUrl,
      logo: `${site.url}/edt-logo.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.title,
      description: site.description,
      inLanguage: "es-AR",
      publisher: { "@id": `${site.organizerUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: `${site.url}/`,
      name: site.title,
      description: site.description,
      inLanguage: "es-AR",
      isPartOf: { "@id": `${site.url}/#website` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${site.url}${site.image}`,
        width: 1200,
        height: 630,
        caption: site.imageAlt,
      },
      publisher: { "@id": `${site.organizerUrl}/#organization` },
    },
  ],
};
