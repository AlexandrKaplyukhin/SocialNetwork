import styled from 'styled-components';
import loader from '../images/loaderrr.svg'

const PreloaderWrapper = styled.div`
width:40%;
`
const Preloader = () => {
    return (
        <PreloaderWrapper>
            <img src={loader} alt="" />
        </PreloaderWrapper>
    )
}

export default Preloader;