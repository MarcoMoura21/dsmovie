import { ReactComponent as GithubIcon } from 'ascets/img/github.svg'
import './style.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/MarcoMoura21" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/MarcoMoura21</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}


export default Navbar;