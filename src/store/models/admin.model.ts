import { Pagination } from "@/src/models";

export interface UserDetailsToAdmin {
  id: string;
  name: string;
  username: string;
  image: string;
  email: string;
  role: string;
  rank: string;
  highestScore: string;
  isBlocked: string;
}

export interface AllUsersAdminResponse {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  data: UserDetailsToAdmin[];
}

export interface GetAllUsersAdminPayload extends Pagination {}