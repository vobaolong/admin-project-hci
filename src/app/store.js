import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import blogReducer from "../features/blogs/blogSlice";
import brandReducer from "../features/brand/brandSlice";
import colorReducer from "../features/color/colorSlice";
import couponReducer from "../features/coupon/couponSlice";
import uploadReducer from "../features/upload/uploadSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import productReducer from "../features/product/productSlice";
import customerReducer from "../features/customers/customerSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import bCategoryReducer from "../features/bcategory/bcategorySlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
    color: colorReducer,
    brand: brandReducer,
    upload: uploadReducer,
    coupon: couponReducer,
    product: productReducer,
    enquiry: enquiryReducer,
    customer: customerReducer,
    pCategory: pCategoryReducer,
    bCategory: bCategoryReducer,
  },
});
