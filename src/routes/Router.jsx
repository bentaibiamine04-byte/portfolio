import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
const ProjectDetail = lazy(() => import("../pages/ProjectDetail"));

export const router = createBrowserRouter([
  {
    path: `/`,
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProjectDetail />
          </Suspense>
        ),
      },
    ],
  },
]);
