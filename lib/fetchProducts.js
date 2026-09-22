// lib/fetchProducts.js
const BASE_URL = 'https://fakestoreapi.com';

export async function fetchAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
}