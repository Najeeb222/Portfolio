import { HomeContainer } from "@modules/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRouter = () => {

 

  const router = createBrowserRouter([
  
    {
      path: '/',
      element: <HomeContainer />,
    },

  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;