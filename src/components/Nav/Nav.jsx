
import './styles.css';

import logo from '../../assets/images/logo-bug.png';
import colorLogo from '../../assets/images/logo-color.png';

const Nav = ({ minimal, authToken, showModal, setShowModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    }

    return (
        <nav>
            <div className="logo-container">
                <img className='logo' src={minimal ? colorLogo : logo} alt="Logo da aplicação" />
            </div>

            {!authToken && <button
                                className='nav-button'
                                onClick={handleClick}
                                disabled={showModal}
                            >Log in</button> }
        </nav>
    )
}

export default Nav;