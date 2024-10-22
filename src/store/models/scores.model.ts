import { Pagination } from "@/src/models";

export interface CreateScorePayload {
  userId: string;
  score: number;
  game: string;
}

export interface GetLeaderboardPayload extends Pagination {
  game: string;
}

export interface LeaderboardPlayer {
  name: string;
  username: string;
  image: string;
  email: string;
  game: string;
  highestScore: string;
}

export interface LeaderboardResponse {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  data: LeaderboardPlayer[];
}
