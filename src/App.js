import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Dialogs from "./Dialogs/Dialogs";
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import MusicsContainer from './Musics/MusicsContainer';
import HeaderContainer from './Header/HeaderContainer';
import styled from 'styled-components';
import LoginContainer from "./Login/LoginContainer";

const AppWrapper = styled.div`
    display: grid;
    grid-template-areas: "h h"
                         "n c";
    grid-template-columns: minmax(200px, 75%) 85%;
    grid-template-rows: minmax(50px, 6vh) 100%;
    margin: 1em;
    @media (max-width: 450px) {
        grid-template-columns: repeat(auto-fit, 100%);
        grid-template-rows: 6vh 100%;
        margin:0;
    }
    `

const ContentWrapper = styled.div`
    margin: 1em 0 1em 1em;
    @media (max-width: 450px) {
        margin:0;
        padding:0;
    }
    `

function App() {
    return (
        <AppWrapper>
        <BrowserRouter>
                <HeaderContainer />
                <Navbar />
                <ContentWrapper>
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer />}>
                            <Route path=":userId" element={<ProfileContainer />} />
                        </Route>
                        <Route path="/messages" element={<Dialogs />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/music" element={<MusicsContainer />} />
                        <Route path="/login" element={<LoginContainer />} />

                    </Routes>
                </ContentWrapper>
        </BrowserRouter>
        </AppWrapper>

    );
}

export default App;
