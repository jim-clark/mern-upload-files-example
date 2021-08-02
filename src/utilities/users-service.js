import * as usersAPI from './users-api';

export async function signUp(userData) {
  try {
    // Delegate the AJAX request to the 
    // users-api.js module which ultimately
    // will return a JWT
    const token = await usersAPI.signUp(userData);
    return token;
  } catch {
    throw new Error('Invalid Sign Up');
  }
}