import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <div />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Форма заявки</Link></li>
    <li><Link to={routes.HOME}>Просмотр форм</Link></li>
    <li><Link to={routes.ACCOUNT}>Аккаунт</Link></li>
    <li><SignOutButton /></li>
  </ul>

export default Navigation;
