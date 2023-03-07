import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function UserDefault(){
    return (
    <main>
        <NavBar />
            <Outlet />
        <Footer />
    </main>
    );
}

export default UserDefault