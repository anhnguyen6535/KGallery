import { IonContent, IonHeader, IonPage, IonTitle } from '@ionic/react';
import type { FC } from 'react';
import { photoDetail } from './photoData';

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding">
                <h1 className='header'>FROZEN CONCRETE</h1>
                
                {photoDetail.map((photo, index) =>(
                    <div key={index} className='fadein textStyle'>
                        <h2>{photo.header}</h2>
                        <img alt={photo.header} src={photo.src}/>
                        <p>{photo.detail}</p>
                    </div>
                )
                )}
            </IonContent>
        </IonPage>
    );
}

export default Landing;
