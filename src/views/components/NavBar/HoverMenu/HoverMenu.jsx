import useSession from '../../../../hooks/useSession';
import { logoutUser } from '../../../../utils/userUtils';
import './HoverMenu.css';

export default function HoverMenu({ visible }) {
    const handleLogout = () => {
        const [state] = useSession();

        console.log(state)
    }
    
    return (
            <div className={visible ? "user-menu-hover__div" : "user-menu-hover__div hidden"}>
                <p onClick={handleLogout}>Logout</p>
            </div>
    )
}