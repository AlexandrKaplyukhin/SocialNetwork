import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Dialogs from "./Dialogs/Dialogs";
import UsersContainer from './Users/UsersContainer';
import ProfileContainer from './Profile/ProfileContainer';
import MusicsContainer from './Musics/MusicsContainer';
import HeaderContainer from './Header/HeaderContainer';

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer />}>
                            <Route path=":userId" element={<ProfileContainer />} />
                        </Route>
                        <Route path="/messages" element={<Dialogs />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/music" element={<MusicsContainer />} />


                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
