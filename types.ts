
export type ContentType = 'movie' | 'series' | 'novela';

export interface MediaContent {
  id: string;
  title: string;
  type: ContentType;
  genre: string;
  year: number;
  rating: number;
  image: string;
  description: string;
  featured?: boolean;
}

export interface UserSubscription {
  status: 'trial' | 'active' | 'expired';
  startDate: number;
  trialEndsAt: number;
}
