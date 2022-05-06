import {useState} from 'react';
import {FormLogin} from "../Styled-components/Login&Registration";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <FormLogin onSubmit={handleSubmit}>
            <label>
                Email address
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
            </label>
            <button
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </FormLogin>
    )
}

export {Form};