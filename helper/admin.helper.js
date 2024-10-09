import { useRuntimeConfig } from 'nuxt/app'; 


export async function GetAllAdmins(page = 1, limit = 10) { // Optional parameters for page and limit
  const config = useRuntimeConfig(); 
  const apiBaseUrl = config.public.apiBaseUrl; // Fetching the base URL from runtime config

  // Retrieve the token from local storage
  const userSession = localStorage.getItem('userSession'); 
  const token = userSession ? JSON.parse(userSession).token : null; // Parse if userSession is JSON, or directly use if it's just a string

  try {
    const response = await fetch(`${apiBaseUrl}/admin?page=${page}&limit=${limit}`, {
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