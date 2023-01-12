'use strict';

export const fetchCountries = name => {

  const BASE_URL = 'https://restcountries.com/v3.1';
  
  return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`
  ) .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return response.json();
    })
    
};


// `https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`


// export class JsonPlaceholderApi {
//   static BASE_URL = 'https://jsonplaceholder.typicode.com';

//   constructor() {
//     this.page = 1;
//   }

//   fetchPosts() {
//     const searchParams = new URLSearchParams({
//       _limit: '20',
//       _page: this.page,
//     });

//     return fetch(`${JsonPlaceholderApi.BASE_URL}/posts?${searchParams}`).then(
//       response => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }

//         return response.json();
//       }
//     );
//   }
// }
