import {useState} from 'react';
import "./Form..css"

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className="signIn">
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
        </form>
    )
}

export {Form};