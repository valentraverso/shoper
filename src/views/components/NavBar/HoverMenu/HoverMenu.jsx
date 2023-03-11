import { useState } from 'react';
import LogOutAlert from '../../PopUp/LogOutAlert';
import './HoverMenu.css';

export default function HoverMenu({ visible }) {
    const [alertLogOut, setAlertLogOut] = useState(false);

    const handleLogOut = () => {
        setAlertLogOut(true);
    }

    return (
            <div className={visible ? "user-menu-hover__div" : "user-menu-hover__div hidden"}>
                {alertLogOut && <LogOutAlert setAlertLogOut={setAlertLogOut} />}
                <p onClick={handleLogOut}>Logout</p>
            </div>
    )
}