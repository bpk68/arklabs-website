
const baseUrl = 'https://ark-labs.co.uk';



export const generateSocialMeta = (title: string, description: string, route: string, image = '/ark-labs-social-card.png', imageAlt = 'Ark Labs, Yorkshire Shopify agency') => {
  const imagePath = `${baseUrl}${image}`;

  return [
    {property: 'og:title', content: title},
    {property: 'og:description', content: description},
    {property: 'og:image', content: imagePath},
    {property: 'og:image:alt', content: imageAlt},
    {property: 'og:url', content: `${baseUrl}${route}`},
    {property: 'twitter:image', content: imagePath},
    {property: 'twitter:image:alt', content: imageAlt},
    {name: 'twitter:title', content: title},
    {name: 'twitter:description', content: description},
  ];
};
