import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Home from 'pages/Home';
import Conversation from 'pages/Conversation';
import { AppLayout } from 'layout/appLayout';

export const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <AppLayout>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/conversation">
            <Conversation />
          </Route>
        </AppLayout>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
