import { jwtDecode } from "jwt-decode";

export function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`));

  return cookieValue ? cookieValue.split('=')[1] : null;
}

export const autoLogin = async (userInfo, getUserById) => {
  try {
    if (!userInfo) {
      const token = getCookie('token'); // Retrieve the token from the cookie
      if (token) {
        const userId = jwtDecode(token).id;
        await getUserById(userId);
      }
    }
  } catch (error) {
    console.error('Auto-login failed:', error)
  }
}