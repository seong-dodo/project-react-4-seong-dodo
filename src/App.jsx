import {
  Switch,
  Route,
} from 'react-router-dom';

import { Global } from '@emotion/react';
import reset from './style/reset';

import HomePage from './HomePage';
import BudgetPage from './BudgetPage';
import CalendarPage from './CalendarPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/budget" component={BudgetPage} />
        <Route path="/calendar" component={CalendarPage} />
      </Switch>
      <Global styles={reset} />
    </div>
  );
}
