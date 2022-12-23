import { lazy } from "react";
import { RouteProps } from "react-router-dom";
const Home = lazy(() => import("../pages/tasks/Tasks"));
const Tasks = lazy(() => import("../pages/tasks/Tasks"));
export const routes: RouteProps[] = [
     {
          id: "home",
          element: <Home />,
          path: "/",
     },
     {
          id: "tasks",
          element: <Tasks />,
          path: "/tasks",
     },
];
