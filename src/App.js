import React, {useReducer,useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Login from './comonents/Login';
import Profile from './comonents/Profile';

export const AuthContext= React.createContext();
const initialState=false;

const reducer=(state,action)=>{
  switch(action){
    case 'Tru':
      return true;
    case 'Fal':
      return false;
    default:
      return false;
  }
}

function App(){

  const [isAuth,dispatch]= useReducer(reducer,initialState);
  return(
    <>
      <AuthContext.Provider 
        value={{State: isAuth,Dispatch: dispatch}}>
          <Router>
            <Switch>
              <Route exact path= '/' component= {Login}/>
              <Route exact path= '/profile' component={Profile}/>
            </Switch>
          </Router>
        
      </AuthContext.Provider>
    </>
  );
}

export default App;