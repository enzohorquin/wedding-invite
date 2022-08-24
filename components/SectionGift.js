import Image from 'next/image'
import styled from 'styled-components'
import styles from '../styles/SectionGift.module.css'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const SectionInfo = styled.section`
    text-align: center;
    padding: 120px 0 120px;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    height: 350px;
    width: 100%;
    align-items: center;
    position: relative;
    padding-top: 20px;
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

function SectionGift() {
    return (
        <SectionInfo>
            <Container>
                <Column className='col-md-6' >
                    <Image className={styles.img} src='/icono-regalo.svg' width={150} height={150} loader={customLoader} alt='ceremonia' />

                    <TextContainers>
                        <Paragraph>
                            {'Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...'}
                        </Paragraph>
                        <Button className={styles.btn}>{'Ver datos bancarios'}</Button>
                    </TextContainers>
                </Column>
            </Container>
        </SectionInfo>)
}

export default SectionGift