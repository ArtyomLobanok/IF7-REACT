import {useState} from 'react';
import {FormLogin} from "../Styled-components/Login&Registration";
import {FormLoginLabelEmail, FormLoginLabelPassword} from "../../configs/stringsData";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    };
    const handleChangePassword = (e) => {
        setPass(e.target.value)
    };
    const handleLogin = () => {
        handleClick(email, pass)
    };
    return (
        <FormLogin onSubmit={handleSubmit}>
            <label>
                {FormLoginLabelEmail}
                <input
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
            </label>
            <label>
                {FormLoginLabelPassword}
                <input
                    type="password"
                    value={pass}
                    onChange={handleChangePassword}
                />
            </label>
            <button
                onClick={handleLogin}
            >
                {title}
            </button>
        </FormLogin>
    )
}

export {Form};