import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ModalContainer } from 'components/main/modal';
import { AppLayout } from 'layouts/appLayout';

import { IndexPage } from 'pages/indexPage';
import { RefillPage } from 'pages/refillPage';
import { GetWinPage } from 'pages/getWinPage';
import { BonusesPage } from 'pages/bonusesPage';
import { MobileVersionPage } from 'pages/mobileVersionPage';
import { ContactsPage } from 'pages/contactsPage';
import { TermsPage } from 'pages/termsPage';
import { ResponsibleGamingPage } from 'pages/responsibleGamingPage';
import { AboutPage } from 'pages/aboutPage';

const RootRoute = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/all-games" />} />
        <Route exact path="/all-games" component={IndexPage} />
        <Route path="/refill" component={RefillPage} />
        <Route path="/get-a-win" component={GetWinPage} />
        <Route path="/bonuses" component={BonusesPage} />
        <Route path="/mobile-version" component={MobileVersionPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/responsible-gaming" component={ResponsibleGamingPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={IndexPage} />
      </Switch>
    </AppLayout>
    <ModalContainer />
  </div>
);

export default RootRoute;
