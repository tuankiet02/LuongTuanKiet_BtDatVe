import { configureStore } from "@reduxjs/toolkit";
import thongTinDatVeReduxcer from "./thongTinDatVeReduxcer";

export const store = configureStore({
  reducer: {
    thongTinDatVeReduxcer: thongTinDatVeReduxcer,
  },
});
