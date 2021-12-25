import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LoadingScreen from './components/LoadingScreen';
import AuthGuard from './components/guards/AuthGuard';
import GuestGuard from './components/guards/GuestGuard';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              
              <Guard>
                <Layout>
                
                  <Component {...props} /> 
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

export const routes = [
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('./views/NotFoundView'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('./views/LoginView'))
  },
  {
    exact: true,
    guard: AuthGuard,
    path: '/board',
    layout:DashboardLayout,
    component: lazy(() => import('./views/BoardView'))
  },
  {
    exact: true,
    guard: AuthGuard,
    path: '/',
    layout:DashboardLayout,
    component: lazy(() => import('./views/BoardView'))
  }

];

export default routes;
