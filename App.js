import React from 'react';
import './Stylesheets/MainPageStyle.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './React-Components/header';
import {Provider} from 'react-redux';
import MainPage from './React-Components/MainPage';
import AllBooksDetails from './React-Components/AllBooksDetails.js';
import configureStore from './store/configureStore.js';

const store = configureStore();

class App extends React.Component {
  constructor(props){
    super(props);

    this.render = this.render.bind(this);
  }
  render() {
    const err = () => {
      return (
        <div>
          <h1> Error!!</h1>
          <p> Page does not exist</p>
        </div>
      )
    }
    return (
      <Provider store={store}>
        <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/" 
            component={() => <MainPage store={store}/>} exact/>
            <Route path="/Home" 
            component={() => <MainPage store={store}/>} exact/>
            <Route path="/AllBooksDetails" component={AllBooksDetails} exact/>
            <Route component={err} />
          </Switch>
        </div>
        
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
