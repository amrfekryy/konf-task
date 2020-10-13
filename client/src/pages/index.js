import React, { Fragment } from 'react';
import { Router } from '@reach/router';
// import { Home, Form, NotFound } from './pages'
import Page from './page'
import Menu from 'components/menu'
import Form from 'components/form'
import Travolta from 'assets/travolta.gif'

const NotFound = () => <img 
    src={Travolta} alt="Nothing Here!" 
    style={{ display:'block', margin:'auto'}}
  /> 


export default function Pages() {
  return (
    <Page>
      <Router style={{width: '100%'}}>
        <Menu      path="/" />
        <Form      path="/form" />                 
        <NotFound  default />
      </Router>
    </Page>
  );
}
