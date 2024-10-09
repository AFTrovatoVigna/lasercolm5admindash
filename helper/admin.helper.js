import { useRuntimeConfig } from 'nuxt/app'; 

export async function GetAllAdmins(page = 1, limit = 10) {
  const config = useRuntimeConfig(); 
  const apiBaseUrl = config.public.apiBaseUrl; 

  const userSession = localStorage.getItem('userSession'); 
  const token = userSession ? JSON.parse(userSession).token : null; 

  try {
    const response = await fetch(`${apiBaseUrl}/admin?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching users:', error);
    return null; 
  }
}

export async function CreateNewAdmin(adminData) {
  const config = useRuntimeConfig(); 
  const apiBaseUrl = config.public.apiBaseUrl; 

  const userSession = localStorage.getItem('userSession'); 
  const token = userSession ? JSON.parse(userSession).token : null; 

  try {
      const response = await fetch(`${apiBaseUrl}/admin/create`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(adminData), // Convert admin data to JSON
      });


      if (!response.ok) {
          throw new Error(`Error creating admin: ${response.status} ${response.statusText}`);
      }

      // If the response is OK, return true
      return true; // Return true to indicate success
  } catch (error) {
      console.error('Error creating admin:', error);
      return null; // Return null or handle the error as needed
  }
}



