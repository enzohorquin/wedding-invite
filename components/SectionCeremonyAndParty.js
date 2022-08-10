import Image from 'next/image'
import styled from 'styled-components'
import styles from '../styles/SectionCeremonyAndParty.module.css'

const SectionInfo = styled.section`
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    height: 400px;
    position: absolute;
    width: 100%;
    align-items: center;
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
                                {'La ceremonia se realizará el 12 de Marzo a las 19:00 horas en la Parroquia Ntra. Sra. del Carmen, Tigre. Tocá el botón de abajo para recibir las indicaciones para llegar.'}
                            </Paragraph>
                            <Button>{'Llegar a la ceremonia'}</Button>
                        </TextContainers>
                    </Column>
                    <Column className='col-md-6'>
                        <Image className={styles.img} src='/icono-fiesta.svg' width={150} height={150} loader={customLoader} alt='ceremonia' />
                        <Title>
                            {'Fiesta'}
                        </Title>
                        <TextContainers>
                            <Paragraph>
                                {'Después de la ceremonia festejaremos en Astilleros Milberg, Nordelta. Tocá el botón de abajo y encontrá las indicaciones para llegar, te esperamos 😉            '}
                            </Paragraph>
                            <Button className={styles.btn}>{'Llegar a la fiesta'}</Button>
                        </TextContainers>
                    </Column>
                </div>
            </div>
        </SectionInfo>)
}

export default SectionCeremonyAndParty
