import styled from 'styled-components'

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
    text-align: left;
    background-color: #9AB09C;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    height: 100px;
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
    color: #fff
`

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
    return src
}

function SectionFooter() {
    return (
        <SectionInfo>
            <Container>
                <Paragraph>
                    {'¡Gracias por acompañarnos en este momento tan importante!'}
                </Paragraph>
            </Container>
        </SectionInfo>)
}

export default SectionFooter