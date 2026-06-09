import { createBrowserRouter } from "react-router";
import { authLoader } from "./loaders/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    loader: authLoader,
    children: [
      { index: true, Component: HomePage },
      {
        path: "clips",
        Component: ClipsLayout,
        children: [
          { index: true, Component: ClipsFeed,  loader: clipsLoader },
          { path: ":clipId", Component: ClipPage, loader: clipLoader },
        ],
      },
      { path: "upload", Component: UploadPage, action: uploadAction },
    ],
  },
  { path: "/login",  Component: LoginPage,  action: loginAction },
]);