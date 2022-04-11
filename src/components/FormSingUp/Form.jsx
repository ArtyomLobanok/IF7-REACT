import {useState} from 'react';
import "./Form..css"

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <div className="signIn">
            <label>
                Email address
            </label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>
                Password
            </label>
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <button
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
    )
}

export {Form};