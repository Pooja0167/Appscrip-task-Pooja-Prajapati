const BASE_URL = 'https://fakestoreapi.com';

// Kuch APIs (jaise fakestoreapi) serverless functions ki "bina User-Agent" wali
// requests ko block kar deti hain (403 error). Isliye hum browser jaisa header bhejte hain.
const REQUEST_HEADERS = {
  Accept: 'application/json',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
};

export async function fetchAllProducts() {
  const res = await fetch(`${BASE_URL}/products`, {
    headers: REQUEST_HEADERS,
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    headers: REQUEST_HEADERS,
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }
  return res.json();
}