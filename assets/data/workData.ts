// src/data/workData.ts
export interface WorkItem {
  title: string;
  description: string;
  bgImage: string;
}

export const workData = [
  { title: 'Frontend project', description: 'Web Design', bgImage: '/work-1.png' },
  { title: 'Geo based app', description: 'Mobile App', bgImage: '/work-2.png' },
  { title: 'Photography site', description: 'Web Design', bgImage: '/work-3.png' },
  { title: 'UI/UX designing', description: 'UI/UX Design', bgImage: '/work-4.png' },
];
