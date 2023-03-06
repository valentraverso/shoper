import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import { DOMSubRoutes } from '../../../routes/DOMRoutes';

function UserDefault({routes}){
    return (
    <main>
        <NavBar />
        <DOMSubRoutes routes={routes} />
        <Footer />
    </main>
    );
}

export default UserDefault