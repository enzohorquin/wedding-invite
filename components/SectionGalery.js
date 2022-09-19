import Image from 'next/image'
import styled from 'styled-components'
import styles from '../styles/SectionGalery.module.css'

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
    return src
}

const SectionGaleryImages = styled.section`
    padding-bottom: 40px;
    padding-top: 40px;
    text-align: center;
    max-width: 100%;
    overflow-x: hidden;
    background-color: #FFF;
    position: relative;
`
const DivImageContainer = styled.div`
    padding: 0 3px;
    margin-bottom: 5px;
`

function SectionGalery() {
    return (
        <SectionGaleryImages>
            <div className='row'>
                <DivImageContainer className='col-12 col-md-6'>
                    <Image className={styles['image-galery']} width={954} height={648} src='/imagen1.jpg' loader={customLoader} />
                </DivImageContainer>
                <DivImageContainer className='col-12 col-md-6'>
                    <Image className={styles['image-galery']} width={954} height={648} src='/imagen2.jpg' loader={customLoader} />
                </DivImageContainer>

            </div>

        </SectionGaleryImages>
    )
}

export default SectionGalery