import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert,
} from '@ionic/react';
import { useHistory } from 'react-router';
import { useUser } from 'context/UserContext';

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '100%',
    height: '80%',
    margin: '0 30px',
  },
  cardHeader: {
    textAlign: 'center',
  },
};

const Home: React.FC = () => {
  const { username, setUsername } = useUser();
  const history = useHistory();
  const [showAlert, setShowAlert] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.length > 0) {
      history.push('/conversation');
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div style={styles.container}>
      <IonCard style={styles.cardContainer}>
        <IonCardHeader style={styles.cardHeader}>
          <IonCardTitle>Talk to Customer Service</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <form onSubmit={handleSubmit}>
            <IonItem>
              <IonLabel>Username:</IonLabel>
              <IonInput
                type="text"
                placeholder="Enter Your Username"
                value={username}
                onIonChange={e => setUsername(e.detail.value as string)}
              />
            </IonItem>
            <IonButton type="submit" expand="full">
              Start Conversation
            </IonButton>
          </form>
        </IonCardContent>
      </IonCard>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        buttons={['OK']}
        header="Error"
        message="Username can not be empty"
      />
    </div>
  );
};

export default Home;
