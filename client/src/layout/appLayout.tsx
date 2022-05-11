import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Customer Service App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>{children}</IonContent>
    </IonPage>
  );
};
