// IMPORTANT:
// Uncomment the below import if using MERN-Infrastructure & token-based auth
// import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null, payloadIsFormData = false) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  const options = { method };
  if (payload) {
    // If payload is a FormData object, fetch automatically
    // sets the Content-Type to 'multipart/form-data'
    options.headers = payloadIsFormData ? {} : { 'Content-Type': 'application/json' };
    // If payload is a FormData object, don't stringify it
    options.body = payloadIsFormData ? payload : JSON.stringify(payload);
  }
  // IMPORTANT:
  // Uncomment the code below if using MERN-Infrastructure & token-based auth
  // const token = getToken();
  // if (token) {
  //   options.headers = options.headers || {};
  //   options.headers.Authorization = `Bearer ${token}`;
  // }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}
