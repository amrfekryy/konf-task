import React from 'react';
import Page from 'components/page'
import Menu from 'components/menu'
import Formi from 'components/form'

// import FormControl from 'components/forms/form_control';
// import Travolta from 'assets/travolta.gif'

// export const Home = () => <Page> <Items /> </Page>
// export const Form = () => <Page> <FormControl settings='signup'/> </Page>
// export const NotFound = () => <Page> 
//   <img src={Travolta} alt="Nothing Here!" style={{ display:'block', margin:'auto'}}/> </Page>

export const Home = () => <Page> <Menu /> </Page>
export const Form = () => <Page> <Formi/> </Page>
export const NotFound = () => <Page><div>Not Found</div></Page>
