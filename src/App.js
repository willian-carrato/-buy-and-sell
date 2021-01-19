import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

export default function Page() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

connect(mapStateToProps, mapDispatchToProps)(Page);
