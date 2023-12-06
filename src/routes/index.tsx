import { useRoutes } from "react-router-dom";
import DefaultRoutes from "./DefaultRoutes";

export default function AllRoutes() {
  return useRoutes([DefaultRoutes]);
}
