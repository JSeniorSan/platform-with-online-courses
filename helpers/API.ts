export const API = {
  topPage: {
    find: process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    byAliases: process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/",
  },
  product: {
    find: process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
  },
  postFormData: {
    sendURL: process.env.NEXT_PUBLIC_DOMAIN + "/api/review/create-demo",
  },
};
