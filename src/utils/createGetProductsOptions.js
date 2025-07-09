import { PRODUCTS_PAGE_SIZES } from '../data/pageSize';

export const createGetProductsOptions = ({
  deviceType,
  order,
  keyword,
  page,
}) => {
  const bestProductsOptions = createGetBestProductsOptions(deviceType);
  const allProductsOptions = createGetAllProductsOptions(
    deviceType,
    order,
    keyword,
    page
  );
  return { bestProductsOptions, allProductsOptions };
};

export const createGetBestProductsOptions = ({ deviceType }) => {
  const { best: bestSize } =
    PRODUCTS_PAGE_SIZES[deviceType] ?? PRODUCTS_PAGE_SIZES.mobile;

  const bestProductsOptions = {
    orderBy: 'favorite',
    pageSize: bestSize,
  };

  return bestProductsOptions;
};

export const createGetAllProductsOptions = ({
  deviceType,
  order,
  keyword,
  page,
}) => {
  const { all: allSize } =
    PRODUCTS_PAGE_SIZES[deviceType] ?? PRODUCTS_PAGE_SIZES.mobile;

  const allProductsOptions = {
    orderBy: order,
    page: page,
    pageSize: allSize,
    keyword: keyword,
  };

  return allProductsOptions;
};
