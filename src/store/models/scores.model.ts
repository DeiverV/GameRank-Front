export interface GetUserScores {
  page: number;
  limit: number;
  username: string;
}

export interface CreateScorePayload {
  playerId: string;
  score: string;
  game: string;
}

export interface LeaderboardPlayer {
  id: string;
  name: string;
  username: string;
  image: string;
  email: string;
  game: string;
  highestScore: string;
}
