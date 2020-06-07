import React from 'react';
import {Route , Router} from 'react-router-dom';
import Home from './components/home'
import Login from './components/login'
class App extends React.Component {
  state = {  }
  render() { 
    return (
        <div>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login}/>
        </div>
    );
  }
}
 
export default App;
