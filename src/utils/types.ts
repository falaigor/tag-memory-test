export interface UserType {
  id: string;
  name: string;
  avatar_url: string;
}

export interface RankingProps {
  id: string;
  guessedTags: number;
  time: number;
  user: UserType;
}
