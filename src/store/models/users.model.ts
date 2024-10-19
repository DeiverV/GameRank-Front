import { Pagination } from "@/src/models";

export interface UserDetails {
  id: string;
  name: string;
  username: string;
  image: string;
  email: string;
  role: string;
  rank: number;
  highestScore: number;
  isBlocked: string;
}

export interface UpdateUserPayload {
  userId: string;
  username: string;
  image: File;
}

export interface UserScore {
  id: string;
  score: string;
  createdAt: string;
  game: string;
}

export interface UserScoresResponse {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  data: UserScore[];
}

export interface GetUserScoresPayload extends Pagination {
  username: string;
}
