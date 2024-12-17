// utils/formatDate.ts
export const formatDate = (date: string): string =>
    new Date(date).toLocaleDateString();
