import Navigation from './navigation'
import React, { Component } from 'react'
import {RootStore} from './stores'

class App extends Component {
    render(){
    const store = new RootStore()
    return(
        <Navigation screenProps={store}/>
    )   
  }
}

export default App;
