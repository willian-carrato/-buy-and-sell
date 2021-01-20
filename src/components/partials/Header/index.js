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
        </div>
      </HeaderArea>
    </div>
  );
}
