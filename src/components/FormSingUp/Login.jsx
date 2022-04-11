import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from './Form';
import {setUser} from '../../redux/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        console.log(auth)
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(() => alert('Введены неверные данные... Оставайтесь на месте, за вами выехали!'))
    }

    return (
        <Form
            title="Sign in"
            handleClick={handleLogin}
        />
    )
}

export {Login}