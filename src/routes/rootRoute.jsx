import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ModalContainer } from 'components/main/modal';
import { AppLayout } from 'layouts/appLayout';

import { IndexPage } from 'pages/indexPage';
import { RefillPage } from 'pages/refillPage';
import { GetWinPage } from 'pages/getWinPage';
import { BonusesPage } from 'pages/bonusesPage';
import { MobileVersionPage } from 'pages/mobileVersionPage';
import { ContactsPage } from 'pages/contactsPage';

const RootRoute = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <AppLayout>
      <Switch>
        <Route exact path="/all-games" component={IndexPage} />
        <Route path="/refill" component={RefillPage} />
        <Route path="/get-a-win" component={GetWinPage} />
        <Route path="/bonuses" component={BonusesPage} />
        <Route path="/mobile-version" component={MobileVersionPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route component={IndexPage} />
      </Switch>
    </AppLayout>
    <ModalContainer />
  </div>
);

export default RootRoute;
