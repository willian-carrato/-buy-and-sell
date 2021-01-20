import React, { useState } from 'react';
import { PageContainer, PageTitle } from '../../components/MainComponents';
import { PageArea } from './styled';
import useAPI from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/AuthHandler';

export default function Page() {
  const api = useAPI();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const handleSubimit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    const json = await api.login(email, password);
    if (json.error) {
      setError(json.error);
    } else {
      doLogin(json.token, rememberPassword);
      window.location.href = '/';
    }
  };

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        <form onSubmit={handleSubimit}>
          <label className="area">
            <div className="area-title">E-mail</div>
            <div className="area-input">
              <input type="email" disabled={disabled} />
            </div>
          </label>

          <label className="area">
            <div className="area-title">Senha</div>
            <div className="area-input">
              <input type="password" disabled={disabled} />
            </div>
          </label>

          <label className="area">
            <div className="area-title">Lembre-me</div>
            <div className="area-input">
              <input type="checkbox" disabled={disabled} />
            </div>

            <label className="area">
              <div className="area-title"></div>
              <div className="area-input">
                <button disabled={disabled}>Entrar</button>
              </div>
            </label>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
}
