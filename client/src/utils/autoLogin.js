import { jwtDecode } from "jwt-decode";

export function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`));

  return cookieValue ? cookieValue.split('=')[1] : null;
}

export const autoLogin = async (userInfo, login) => {
  try {
    if (!userInfo) {
      const token = getCookie('token'); // Retrieve the token from the cookie
      if (token) {
        const email = jwtDecode(token).email;
        const id = jwtDecode(token).id;
        await login(email, id, true);
      }
    }
  } catch (error) {
    console.error('Auto-login failed:', error)
  }
}