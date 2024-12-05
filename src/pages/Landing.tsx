import { IonContent, IonPage } from '@ionic/react';
import type { FC } from 'react';
import { photoDetail } from './photoData';
import { FadeInSection } from './FadeInSection';

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
    return (
        <IonPage>
            <IonContent fullscreen className="ion-padding">
                <h1 className='header'>FROZEN CONCRETE</h1>
                
                {photoDetail.map((photo, index) =>(
                    <FadeInSection key={index} >
                            <h2>{photo.header}</h2>
                            <img alt={photo.header} src={photo.src}/>
                            <p>{photo.detail}</p>
                    </FadeInSection>
                )
                )}
            </IonContent>
        </IonPage>
    );
}

export default Landing;
