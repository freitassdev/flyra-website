export interface IApiResponse {
  message: string;
  success: boolean;
  error?: string;
  statusCode?: number;
}
