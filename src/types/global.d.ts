declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

declare var process: {
  env: {
    NEXT_PUBLIC_API_URL: string;
  };
};
