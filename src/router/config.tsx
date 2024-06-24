import { RouteProps } from 'react-router';
import { UserProfile } from '../components/Users/UserProfile/UserProfile';
import { MyProfile } from '../components/MyProfile/MyProfile';
import { Todos } from '../components/Todos/Todos';
import { UsersList } from '../components/Users/UsersList/UsersList';

enum AppRoutes {
  MY_PROFILE = 'main',
  USER_PROFILE = 'profile',
  USERS = 'users',
  TODOS = 'todos',
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MY_PROFILE]: '/',
  [AppRoutes.USER_PROFILE]: '/users/profile/:id',
  [AppRoutes.TODOS]: '/todos',
  [AppRoutes.USERS]: '/users',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MY_PROFILE]: {
    path: RouterPath[AppRoutes.MY_PROFILE],
    element: <MyProfile />,
  },
  [AppRoutes.USER_PROFILE]: {
    path: RouterPath[AppRoutes.USER_PROFILE],
    element: <UserProfile />,
  },
  [AppRoutes.TODOS]: {
    path: RouterPath[AppRoutes.TODOS],
    element: <Todos />,
  },
  [AppRoutes.USERS]: {
    path: RouterPath[AppRoutes.USERS],
    element: <UsersList />,
  },
};
