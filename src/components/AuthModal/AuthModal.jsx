import { useState }  from 'react';

import './styles.css';

const AuthModal = ({ setShowModal, isSignUp }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = () => {
        setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            if (isSignUp && (password !== confirmPassword)) {
                setError('Passwords do not match!')
            }
            console.log('Make a request to DB')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="auth-modal-content">
            <div className='close-icon' onClick={handleClick}>ⓧ</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking Log in, you agree to our terms. Learn how we process your data in our Privacy Policy</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    id='email'
                    name='email'
                    placeholder='E-mail:'
                    required={true}
                    onChange={(e) => setEmail (e.target.value)}
                />

                <input 
                    type="password"
                    id='passwd'
                    name='passwd'
                    placeholder='Password:'
                    required={true}
                    onChange={(e) => setPassword (e.target.value)}
                />

                {isSignUp && <input 
                    type="password"
                    id='confirmPasswd'
                    name='confirmPasswd'
                    placeholder='Confirm Password:'
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}

                <input className='secondary-button' type="submit" />
                <p>{error}</p>
            </form>

            <hr />

            <h2>GET THE APP</h2>
        </div>
    )
}

export default AuthModal;