import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function UserDefault() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}

export default UserDefault