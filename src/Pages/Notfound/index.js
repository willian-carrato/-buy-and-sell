import React from 'react';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}
