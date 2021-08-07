import sendRequest from './send-request';

const BASE_URL = '/api/photos';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function upload(formData) {
  // See refactored sendRequest function that now accepts a 4th arg
  // used to specify that the payload is a FormData object
  return sendRequest(`${BASE_URL}/upload`, 'POST', formData, true);
}
