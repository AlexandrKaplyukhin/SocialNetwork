import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import UsersContainer from './Users/UsersContainer';

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/messages" element={<Dialogs/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>

                        </Routes>
                    </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
