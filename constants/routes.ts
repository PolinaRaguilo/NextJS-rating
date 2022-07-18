export const API = `${process.env.NEXT_PUBLIC_DOMAIN}/api`;
export const TOP_PAGES_ROUTE = `${API}/top-page/find`;
export const PAGE_BY_ALIAS_ROUTE = (alias: string) =>
  `${API}/top-page/byAlias/${alias}`;
export const FIND_PRODUCT_BY_NAME_ROUTE = `${API}/product/find`;
