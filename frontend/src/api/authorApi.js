import { handleResponse, handleError } from "./apiUtils";
import dotenv from 'dotenv';
import.meta.env

dotenv.config()
const baseUrl = dotenv.process.env.API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
