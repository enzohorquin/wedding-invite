import styled from 'styled-components'
import styles from '../styles/SectionAssistance.module.css'

//To Do Move to a common styles all this components

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const SectionInfo = styled.section`
    text-align: center;
    font-weight: 400;
    line-height: 1.5;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    height: 350px;
    width: 100%;
    align-items: center;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-bottom: 40px;
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
    height: 60px;
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

function SectionAssistance() {
    return (
        <SectionInfo>
            <Container>
                <Column className='col-md-6' >
                    <Title>
                        {'CONFIRMACIÓN DE ASISTENCIA'}
                    </Title>
                    <TextContainers>
                        <Paragraph>
                            {'Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!'}
                        </Paragraph>
                        <Button className={styles.btn}>{'Confirmar asistencia'}</Button>
                    </TextContainers>
                </Column>
            </Container>
        </SectionInfo>)
}

export default SectionAssistance