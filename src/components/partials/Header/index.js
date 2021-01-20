import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';

import { isLogged } from '../../../helpers/AuthHandler';

export default function Header() {
  const logged = isLogged();

  return (
    <div>
      <HeaderArea>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="logo1.png" alt="logo" height="40" width="100" />
            </Link>
          </div>
          <nav>
            <ul>
              {logged && (
                <>
                  <li>
                    <Link to="/my-account">Minha conta</Link>
                    <li>
                      <Link to="/logout">Sair</Link>
                    </li>
                  </li>
                  <li>
                    <Link className="button" to="/post-an-ad">
                      Anúncie aqui
                    </Link>
                  </li>
                </>
              )}

              {!logged && (
                <>
                  <li>
                    <Link to="/signin">Login</Link>
                  </li>

                  <li>
                    <Link to="/signup">Cadastra-se </Link>
                  </li>
                  <li>
                    <Link className="button" to="/signin">
                      Anúncie aqui
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </HeaderArea>
    </div>
  );
}
