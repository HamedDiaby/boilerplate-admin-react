import { FC } from 'react';
import { NavigationPathsEnum } from "@utilities/enums";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from '@pages/containers';
import { NotFound } from '@pages/internalApp/NotFound';
import { ForgotPassword, Login } from '@pages/externalApp';
  
export const Navigations: FC = () => {
  
  const router = createBrowserRouter([
    {
      path: NavigationPathsEnum.login,
      element: <Login />,
    },
    {
      path: NavigationPathsEnum.forgotPassword,
      element: <ForgotPassword />,
    },
    {
      path: NavigationPathsEnum.internalApp,
      element: <Layout />,
    },
    {
      path: NavigationPathsEnum.notFound,
      element: <NotFound />,
    },
  ]);

  return (
    <RouterProvider 
      data-testid="navigations"
      router={router} 
    />
  );
};
