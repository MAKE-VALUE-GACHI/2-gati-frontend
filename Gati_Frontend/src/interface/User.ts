export interface IProfile {
  name: string;
  email: string;
  boards: number;
  recievedReview: number;
  givedReview: number;
  score: number;
}

export interface IProfileProps {
  profile: IProfile;
}

export interface IShared {
  id: number;
  imageURL: string;
  type: string;
  score?: number;
}
