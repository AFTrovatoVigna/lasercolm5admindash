import { useRuntimeConfig } from 'nuxt/app'; 

async function GetAllUsers(page = 1, limit = 10) { // Optional parameters for page and limit
  const config = useRuntimeConfig(); 
  const apiBaseUrl = config.public.apiBaseUrl; // Fetching the base URL from runtime config

  // Retrieve the token from local storage
  const userSession = localStorage.getItem('userSession'); 
  const token = userSession ? JSON.parse(userSession).token : null; // Parse if userSession is JSON, or directly use if it's just a string

  try {
    const response = await fetch(`${apiBaseUrl}/users?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include the Authorization header with the token if it exists
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching users:', error);
    return null; // Return null or handle the error as needed
  }
}

export default GetAllUsers; 

export async function GetUserById(userId, token) {
  const config = useRuntimeConfig(); 
  const apiBaseUrl = config.public.apiBaseUrl; 
  try {
      const res = await fetch(`${apiBaseUrl}/users/${userId}`, {
          method: 'GET',
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      
      if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      const user = await res.json();
      return user;
  } catch (error) {
      console.error('Error fetching user:', error);
      throw new Error(error);
  }
}

export async function UpdateUser(userId, updatedData, token) {
  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.apiBaseUrl;

  try {
    const res = await fetch(`${apiBaseUrl}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updatedData) // Convert the updated data to JSON
    });

    if (!res.ok) {
      throw new Error(`Error updating user: ${res.status} ${res.statusText}`);
    }

    const updatedUser = await res.json(); // Parse the updated user data from the response
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error(error);
  }
}
