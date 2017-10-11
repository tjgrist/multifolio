import Navigation from './navigation'
import React from 'react'
import { RootStore } from './stores'

class App extends React.Component {
    render () {
        const store = new RootStore()
        return(
            <Navigation screenProps={store}/>
        )   
    }
}

export default App;