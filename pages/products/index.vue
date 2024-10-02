<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useRuntimeConfig } from 'nuxt/app'

const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBaseUrl; // Correctly access the public API base URL
console.log('API Base URL:', apiBaseUrl); // Debug the value

const route = useRoute();
let productsArray = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/products`);
    console.log('Response:', response); // Log the response object
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const text = await response.text(); // Read the response as text first
    console.log('Raw response:', text); // Log the raw response for debugging
    const data = JSON.parse(text); // Manually parse the JSON
    productsArray.value = data;
    
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};


onMounted(() => {
  fetchProducts();
});
</script>
