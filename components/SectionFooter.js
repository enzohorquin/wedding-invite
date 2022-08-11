import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const SectionInfo = styled.section`
    text-align: center;
    padding: 120px 0 120px;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    background-color: #9AB09C;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    height: 100px;
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
                <Column className='col-md-6' >
                    <TextContainers>
                        <Paragraph>
                            {'¡Gracias por acompañarnos en este momento tan importante!'}
                        </Paragraph>
                    </TextContainers>
                </Column>
            </Container>
        </SectionInfo>)
}

export default SectionFooter