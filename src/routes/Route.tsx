import React, { useCallback } from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { isSigned } = useAuth();

  const componentToRender = useCallback(() => {
    const isLoggedForAccessPrivateRoutes = isPrivate === isSigned;

    if (isLoggedForAccessPrivateRoutes) {
      return <Component />;
    }

    const pathname = isPrivate ? '/' : '/home';
    return <Redirect to={{ pathname }} />;
  }, [isPrivate, isSigned]);

  return <ReactDOMRoute {...rest} render={componentToRender} />;
};

export default Route;
