import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Dialogs from "./Dialogs/Dialogs";
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import MusicsContainer from './Musics/MusicsContainer';
import HeaderContainer from './Header/HeaderContainer';
import styled from 'styled-components';

const AppWrapper = styled.div`
    display: grid;
    grid-template-areas: "h h"
                         "n c";
    grid-template-columns: minmax(200px, 75%) 85%;
    grid-template-rows: minmax(50px, 6vh) 100%;
    margin: 1em;`

const ContentWrapper = styled.div`
    margin: 1em 0 1em 1em;
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
                    </Routes>
                </ContentWrapper>
        </BrowserRouter>
        </AppWrapper>

    );
}

export default App;
