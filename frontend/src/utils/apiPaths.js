const BASE_URL = "http://localhost:5000"

export const API_PATHS = {
  AUTH: {
    LOGIN: `${BASE_URL}/api/auth/login`,
    SIGNUP: `${BASE_URL}/api/auth/signup`,
    CHECKAUTH: `${BASE_URL}/api/auth/authorised`
  },

  IMAGE: {
    IMAGE_UPLOAD:`${BASE_URL}/api/admin/products/upload_image`
  },

ADMIN: {
    BRAND: {
      ADD: `${BASE_URL}/api/admin/products/brand`,
      GET: `${BASE_URL}/api/admin/products/getbrand`,
          },

    PRODUCTS: {
      ADD: `${BASE_URL}/api/admin/products/addproduct`,
      GET: `${BASE_URL}/api/admin/products/getallproduct`,
      UPDATE: (id) => `${BASE_URL}/api/admin/products/updateproduct/${id}`,
      ADD: `${BASE_URL}/api/admin/products/addproduct`,
      DELETE: (id) => `${BASE_URL}/api/admin/products/deleteproduct/${id}`,
        }
}
}