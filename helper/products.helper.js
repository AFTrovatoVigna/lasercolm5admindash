import { useRuntimeConfig } from 'nuxt/app';

// Function to get all products with optional pagination
async function GetAllProducts(page = 1, limit = 15) {
  const config = useRuntimeConfig(); 
  const apiBaseUrl = config.public.apiBaseUrl; // Fetching the base URL from runtime config

  // Retrieve the token from local storage
  const userSession = localStorage.getItem('userSession'); 
  const token = userSession ? JSON.parse(userSession).token : null; // Parse if userSession is JSON

  try {
    const response = await fetch(`${apiBaseUrl}/products?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include the Authorization header with the token if it exists
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.status} ${response.statusText}`);
    }

    const data = await response.json(); // Directly parse the JSON response
    return data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching products:', error);
    return null; // Return null or handle the error as needed
  }
}

// Export the function for use in other parts of the application
export default GetAllProducts; 

// Additional function to fetch a product by ID, if needed
export async function GetProductById(productId) {
  const config = useRuntimeConfig(); 
  const apiBaseUrl = config.public.apiBaseUrl; 

  try {
    const res = await fetch(`${apiBaseUrl}/products/${productId}`, {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    });

    if (!res.ok) {
      throw new Error(`Error fetching product: ${res.status} ${res.statusText}`);
    }

    const product = await res.json();
    return product; // Return the fetched product
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error(error);
  }
}
