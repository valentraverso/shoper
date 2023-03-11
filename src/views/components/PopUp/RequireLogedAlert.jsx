import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function LogOutAlert({setAlertLogOut}) {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();

    MySwal.fire({
        title: 'You need to be loged to add products to the cart',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
    }).then((result) => {
        if (result.isConfirmed) {
            navigate('/login')
        }
    })
}