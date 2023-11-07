/*authenticate(jwt, cb) {
if(typeof window !== "undefined")
sessionStorage.setItem('jwt', JSON.stringify(jwt)) 
cb()
}
isAuthenticated() {
if (typeof window == "undefined") 
return false
if (sessionStorage.getItem('jwt'))
return JSON.parse(sessionStorage.getItem('jwt')) 
else
return false 
}
clearJWT(cb) {
if(typeof window !== "undefined") 
sessionStorage.removeItem('jwt')
cb()
signout().then((data) => {
document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}) 
}*/


import { signout } from 'react';

class AuthManager {

  authenticate(jwt, cb) {
    if (typeof window !== "undefined") {
      sessionStorage.setItem('jwt', JSON.stringify(jwt));
    }
    cb();
  }

  isAuthenticated() {
    if (typeof window === "undefined") {
      return false;
    }
    return !!sessionStorage.getItem('jwt');
  }

  clearJWT(cb) {
    // if (typeof window !== "undefined") {
      sessionStorage.removeItem('jwt');
      cb();
      // Assuming signout() is defined and imported from somewhere
      signout().then((data) => {
        document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      });
    // }
  }
}

// Export the AuthManager class
export default AuthManager;

// export function authenticate(jwt, cb) {
//   console.log("Auth", jwt);
//   if (typeof window !== "undefined") {
//     sessionStorage.setItem('jwt', JSON.stringify(jwt));
//   }
//   cb();
// }

// export function isAuthenticated() {
//   if (typeof window === "undefined") {
//     return false;
//   }
//   return !!sessionStorage.getItem('jwt');
// }

// export function clearJWT(cb) {
//   if (typeof window !== "undefined") {
//     sessionStorage.removeItem('jwt');
//     cb();
//     // Assuming signout() is defined and imported from somewhere
//     signout().then((data) => {
//       document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     });
//   }
// }