// src/data/serviceData.ts
import { assets } from './assets';

import type { StaticImageData } from 'next/image';

export interface ServiceItem {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
}

export const serviceData: ServiceItem[] = [
  { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
  { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
  { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
  { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
];
