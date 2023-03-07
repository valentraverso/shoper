import { logoutUser } from '../../../utils/userUtils';
import useSession from '../../../hooks/useSession';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ACTIONS_USER } from '../../../reducers/userReducers';

export default function LogOutAlert({setAlertLogOut}) {
    const [state, dispatch] = useSession();

    const MySwal = withReactContent(Swal)

    MySwal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, i want to logout.'
    }).then((result) => {
        if (result.isConfirmed) {
            MySwal.fire(
                'Good Bye!👋',
            )
            logoutUser();

            dispatch({type: ACTIONS_USER.VERIFY_LOGIN})

            setAlertLogOut(false);
        }else{
            setAlertLogOut(false);
        }
    })
}