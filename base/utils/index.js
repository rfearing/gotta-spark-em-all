/**
 *
 * @param {Int} id - The ID of the pokemon
 */
export const getPokeImage = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

/**
 * Get Pokemon ID from the URL
 * @param {Int} id - The ID of the pokemon
 */
export const getIdFromUrl = (url) => {
  const urlArray = url.trim().replace(/\/+$/, '').split('/');
  const id = urlArray.slice(-1);
  return id;
};
