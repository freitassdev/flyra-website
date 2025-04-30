export interface IApiResponse {
  data: any & { success: boolean; message: string };
  message?: string;
  statusCode: number;
  statusMessage: string;
}
