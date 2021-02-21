import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'https://api.products.com' : 'http://localhost:3000'
export const productsUrl = baseUrl +'/products'
export const cartUrl = baseUrl + '/cart'
export const registrationsUrl = baseUrl + '/registrations'
