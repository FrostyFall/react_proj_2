export const addItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
