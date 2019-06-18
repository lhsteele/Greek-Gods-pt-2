import React from "react";
import GodsList from './gods/GodsList';
import GodCreate from './create/GodCreate';
import GodDetail from './gods/GodDetail';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/gods/:id" component={GodDetail} />
        <Route exact path="/create" component={GodCreate} />
        <Route path="/" component={GodsList}/>
      </Switch>
    </div>
  )
}

export default App;