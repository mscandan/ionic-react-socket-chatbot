import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Conversation: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>conversation page</div>
      </IonContent>
    </IonPage>
  );
};

export default Conversation;
