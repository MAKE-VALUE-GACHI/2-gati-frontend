export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}
