// src/data/infoList.ts
import { assets } from './assets';

import type { StaticImageData } from 'next/image';

export interface InfoItem {
  icon: string | StaticImageData;
  iconDark: string | StaticImageData;
  title: string;
  description: string;
}

export const infoList: InfoItem[] = [
  { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
  { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
  { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' },
];
