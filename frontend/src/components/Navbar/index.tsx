import { ReactComponent as GithubIcon } from 'assets/images/github.svg';

function Navbar() {

    return(
        <header>
        <nav>
          <div>
            <h1>Movie App</h1>
            <a href='https://github.com/Jrevoredo42'>
              <div>
                <GithubIcon />
                <p>/João revoredo</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;
