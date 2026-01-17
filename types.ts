
export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  price: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
