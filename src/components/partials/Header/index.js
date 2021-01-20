import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';

export default function Header() {
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
              <li>
                <Link to="">Login</Link>
              </li>

              <li>
                <Link to="">Cadastra-se </Link>
              </li>
              <li>
                <Link className="button" to="">
                  Anúncie aqui
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderArea>
    </div>
  );
}
