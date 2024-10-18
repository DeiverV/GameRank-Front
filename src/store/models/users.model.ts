export interface UserDetails {
  id: string;
  name: string;
  username: string;
  image: string;
  email: string;
  role: string;
  rank: number;
  highScore: number;
  isBlocked: string;
}

export interface UpdateUserPayload {
  username: string;
  image: string;
}

export interface UserScore {
  id: string;
  score: string;
  createdAt: string;
  game: string;
}
