import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ModalContainer } from 'components/main/modal';
import { AppLayout } from 'layouts/appLayout';
import { IndexPage } from 'pages/indexPage';

const RootRoute = () => (
  <div style={{ width: '100%', height: '100%' }}>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route component={IndexPage} />
      </Switch>
    </AppLayout>
    <ModalContainer />
  </div>
);

export default RootRoute;
