import React from 'react';
import {
    Switch,
    Route,
  } from "react-router-dom";
import Element from './Element';
import MyContext from '../context/context';
import EditElementInput from './EditElementInput';
import AddElementInput from './AddElementInput';


function Elements () {
  const elementContext = React.useContext(MyContext);


    return (
      <div>
        {elementContext.modeEdit ? 
        <EditElementInput></EditElementInput> 
        : 
        <AddElementInput></AddElementInput>}

        <Switch>
          <Route exact path="/">
            <Element category=''></Element>
          </Route>
          <Route path="/important">
            <Element category="important"></Element>
          </Route>
          <Route path="/other">
            <Element category="other"></Element>
          </Route>
        </Switch>
      </div>
    );
}

export default Elements;