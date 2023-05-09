// Axios is a popular NPM package used for preforming API requests
import axios from 'axios';

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = () =>
  axios.get(`https://api.github.com/users/RaulMaya/repos?per_page=3`);

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
