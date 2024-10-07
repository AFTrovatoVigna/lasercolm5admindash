export async function Login(email, password) {
  try {
    const config = useRuntimeConfig();  
    const apiBaseUrl = config.public.apiBaseUrl; 
    const body = { email, password };

    console.log("URL:", `${apiBaseUrl}/admin/login`);
    console.log("Request Body:", body);

    const res = await fetch(`${apiBaseUrl}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // Read the body only once
    const responseBody = await res.json(); // This will parse the JSON response

    console.log("Response Body:", responseBody);  // Log the response body

    if (res.ok) {
      return responseBody; // Return the parsed JSON
    } else {
      throw new Error('Fallo el inicio de sesión');
    }
  } catch (error) {
    console.error("Error:", error);
    throw new Error(error.message || 'Error en el servidor');
  }
}
