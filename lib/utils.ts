export const updateHttpToHttps = (html: string): string => {

    const regex = /http:\/\/(ghost.tiagovaccari.com)/g

    const https = html.replace(regex, 'https://ghost.tiagovaccari.com');

    return https;
  };