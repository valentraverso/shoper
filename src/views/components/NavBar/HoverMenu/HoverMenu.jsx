import useSession from '../../../../hooks/useSession';
import { ACTIONS_USER } from '../../../../reducers/userReducers';
import { logoutUser } from '../../../../utils/userUtils';
import './HoverMenu.css';

export default function HoverMenu({ visible }) {
    const [state, dispatch] = useSession();

    const handleLogOut = () => {
        logoutUser();

        dispatch({type: ACTIONS_USER.VERIFY_LOGIN})
    }

    return (
            <div className={visible ? "user-menu-hover__div" : "user-menu-hover__div hidden"}>
                <p onClick={handleLogOut}>Logout</p>
            </div>
    )
}