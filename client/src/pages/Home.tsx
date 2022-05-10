import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { JoinRoom } from 'components';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <JoinRoom />
      </IonContent>
    </IonPage>
  );
};

export default Home;
