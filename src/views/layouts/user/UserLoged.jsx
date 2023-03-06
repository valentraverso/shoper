import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import { PrivateRoutes } from '../../../routes/DOMRoutes';

function UserLoged({routes}){
    return (
    <main>
        <NavBar />
        <PrivateRoutes routes={routes} />
        <Footer />
    </main>
    );
}

export default UserLoged