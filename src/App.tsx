// project import

import Layout from "./Layout/Layout";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Home</h1>} />
      <Route path="about" element={<h1>about</h1>} />
      <Route path="login" element={<h1>login</h1>} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
