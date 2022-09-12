import Image from 'next/image'
import styled from 'styled-components'
import styles from '../styles/SectionCeremonyAndParty.module.css'

//To Do Move to a common styles all this components
const SectionInfo = styled.section`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    position: relative;
    padding-bottom: 20px;
    `
const Title = styled.h4`
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 20px;
`
const Column = styled.div`
text-align: center;
`
const TextContainers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 170px;
`
const Paragraph = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 17px;
    text-align: center;
    margin-bottom: 25px;
`
const Button = styled.button`
    color: white;
    background-color: #9AB09C;
    border-radius: 30px;
    padding: 10px 40px;
    border: 1px solid #9AB09C;
    text-transform: uppercase;
    cursor: pointer;
`
// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
    return src
}

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

function SectionCeremonyAndParty() {
    return (
        <SectionInfo>
            <div className='container'>
                <div className='row'>
                    <Column className='col-md-6'>
                        <Image className={styles.img} src='/icono-ceremonia.svg' width={150} height={150} loader={customLoader} alt='ceremonia' />
                        <Title>
                            {'Ceremonia'}
                        </Title>
                        <TextContainers>
                            <Paragraph>
                                {'La ceremonia se realizará el 7 de Diciembre a las 18:30 horas en la Capilla María Auxiliadora, Mar del Plata. Tocá el botón de abajo para recibir las indicaciones para llegar.'}
                            </Paragraph>
                            <Button className={styles.btn} onClick={() => openInNewTab('https://www.google.com/maps/dir//Capilla+Mar%C3%ADa+Auxiliadora+mar+del+plata/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x9584d93db023d387:0x34bd91497b531fad?sa=X&ved=2ahUKEwiQo4ONz-D5AhX9rZUCHbPVBMIQ9Rd6BAgxEAM')}>{'Llegar a la ceremonia'}</Button>
                        </TextContainers>
                    </Column>
                    <Column className='col-md-6'>
                        <Image className={styles.img} src='/icono-fiesta.svg' width={150} height={150} loader={customLoader} alt='ceremonia' />
                        <Title>
                            {'Fiesta'}
                        </Title>
                        <TextContainers>
                            <Paragraph>
                                {'Después de la ceremonia festejaremos en Luxemburgo Haus, Ruta 226 KM 12. Tocá el botón de abajo y encontrá las indicaciones para llegar, te esperamos 😉            '}
                            </Paragraph>
                            <Button className={styles.btn} onClick={() => openInNewTab('https://www.google.com/maps/dir//luxemburgo+sierra+de+los+padres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x958528f3d9bebeef:0x11538590bd8c2541?sa=X&ved=2ahUKEwigu4q6vsH5AhUakZUCHQTWCkoQ9Rd6BAhBEAU')}> {'Llegar a la fiesta'}</Button>
                        </TextContainers>
                    </Column>
                </div>
            </div>
        </SectionInfo>)
}

export default SectionCeremonyAndParty
