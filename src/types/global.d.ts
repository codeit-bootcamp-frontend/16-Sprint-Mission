declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";

declare var process: {
  env: {
    REACT_APP_API_URL?: string;
  };
};
