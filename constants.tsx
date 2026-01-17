
import { Destination, Service } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Neo Tokyo',
    country: 'Japan',
    description: 'Experience the cyberpunk heart of the world where tradition meets ultra-modernity.',
    image: 'https://picsum.photos/id/1015/800/600',
    price: '$2,400',
    tags: ['Future', 'Tech', 'Culture']
  },
  {
    id: '2',
    name: 'Azure Maldives',
    country: 'Maldives',
    description: 'Bio-luminescent beaches and luxury underwater resorts for the ultimate escape.',
    image: 'https://picsum.photos/id/1011/800/600',
    price: '$3,800',
    tags: ['Beach', 'Luxury', 'Relax']
  },
  {
    id: '3',
    name: 'Glacial Aurora',
    country: 'Iceland',
    description: 'Chasing the celestial neon lights in the coldest, most pristine wilderness.',
    image: 'https://picsum.photos/id/1016/800/600',
    price: '$1,900',
    tags: ['Nature', 'Aurora', 'Adventure']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Visa Consultancy',
    description: 'AI-assisted visa processing for over 150 countries with 99% success rate.',
    icon: 'fa-passport'
  },
  {
    id: 's2',
    title: 'Luxury Expeditions',
    description: 'Tailor-made itineraries crafted by our futuristic planning algorithms.',
    icon: 'fa-jet-fighter-up'
  },
  {
    id: 's3',
    title: 'Study Abroad',
    description: 'Connecting bright minds with the world’s leading universities and research hubs.',
    icon: 'fa-graduation-cap'
  }
];
