import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { Home, Form, NotFound } from './pages'

export default function Pages() {
  return (
    <Router>
      <Home      path="/" />
      <Form      path="/form" />                 
      <NotFound  default />
    </Router>
  );
}
