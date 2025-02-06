import { from } from "env-var";

const env = from(process.env);

export const ENVIRONMENT = {
  // BASE_API_URL: env.get('NEXT_PUBLIC_BASE_API_URL').required().asUrlString()
  BASE_API_URL: env
    .get("NEXT_PUBLIC_BASE_API_URL")
    .default("http://localhost:3000/")
    .asUrlString(),
};
