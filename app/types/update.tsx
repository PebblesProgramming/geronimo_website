import { StaticImageData } from 'next/image';

// --- Type Definitie ---
export type UpdateLog = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  // Let op: 'content' is vervangen door 'fullDetails' voor consistentie met de Article component
  fullDetails: string;
  imagePath: StaticImageData;
  creationDate: Date; // Moet een Date object zijn
  updatedDate: Date; // Moet een Date object zijn
  author?: string; // Optioneel
};
