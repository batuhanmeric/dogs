import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import Homepage from './containers/Homepage';
import FilteredDogs from './containers/FilteredDogs';






 class App extends Component {

  render() {
    return (
      <div className="App">
      <Header/> 
 
      <Switch>
           <Route path = "/" exact component = {Homepage} />
           <Route path = "/hakkinda" exact component = {() => <div>Hakkimizda Componenti</div> } />
           <Route path = "/tur/:yazilanTur" component = {FilteredDogs} />
           <Route component = {() => <div><h1>404 sayfa bulunamadi</h1></div>} />
        
        
           {/*{*/}
                    {/*    routes.map((route) => {*/}
                    {/*        // <Route {...route} />*/}
                    {/*        return <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />*/}
                    {/*    })*/}
                    {/*}*/}
      </Switch>
 
   
     </div>
    )
  }
}

export default App;