import { logoutUser } from '../../../helpers/utils/userUtils';
import useSession from '../../../helpers/hooks/useSession';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function LogOutAlert({setAlertLogOut}) {
    const {verifyLogin} = useSession();

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

            verifyLogin();

            setAlertLogOut(false);
        }else{
            setAlertLogOut(false);
        }
    })
}