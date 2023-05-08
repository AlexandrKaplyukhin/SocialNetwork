import styled from 'styled-components';
import loader from '../images/loaderrr.svg'

const PreloaderWrapper = styled.div`
width:100vw;
height:100vh;
background-color:red;
position:absolute;
width:40%;
z-index:10;
visibility:hidden;
`
const Preloader = () => {
    return (
        <PreloaderWrapper>
            <img src={loader} alt="" />
        </PreloaderWrapper>
    )
}

export default Preloader;