import { handleResponse, handleError } from "./apiUtils";

const baseUrl = import.meta.env.VITE_API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}