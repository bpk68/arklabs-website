const baseUrl = 'https://k-tech.systems';

export const generateSocialMeta = (
  title: string,
  description: string,
  route: string,
  image = '/k-tech-social-card.png',
  imageAlt = 'K-Tech, Yorkshire Shopify agency'
) => {
  const imagePath = `${baseUrl}${image}`;

  return [
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: imagePath },
    { property: 'og:image:alt', content: imageAlt },
    { property: 'og:url', content: `${baseUrl}${route}` },
    { property: 'twitter:image', content: imagePath },
    { property: 'twitter:image:alt', content: imageAlt },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ];
};
