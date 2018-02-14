import React from 'react';
import {NavLink} from 'react-router-dom';
import { Layout } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';

 const Header=()=>(
  <div>
 <Button offset={6} type="primary">
  <NavLink to="/" exact={true}>Home</NavLink>
 </Button>
  </div>
)
export default Header;