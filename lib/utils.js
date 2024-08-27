import { categories } from '@/lib/data';

export const getRandomNumber = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const getCategoryBySlug = (slug) => {
  return categories.filter((category) => category.categorySlug === slug)[0];
};
