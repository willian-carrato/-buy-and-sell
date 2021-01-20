import React from 'react';
import { PageContainer, PageTitle } from '../../components/MainComponents';
import { PageArea } from './styled';

export default function Page() {
  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        <form>
          <label className="area">
            <div className="area-title">E-mail</div>
            <div className="area-input">
              <input type="email" />
            </div>
          </label>

          <label className="area">
            <div className="area-title">Senha</div>
            <div className="area-input">
              <input type="password" />
            </div>
          </label>

          <label className="area">
            <div className="area-title">Lembre-me</div>
            <div className="area-input">
              <input type="checkbox" />
            </div>

            <label className="area">
              <div className="area-title"></div>
              <div className="area-input">
                <button>Entrar</button>
              </div>
            </label>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}
