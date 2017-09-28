import React from 'react'
import Button from 'react-native-button'
import { Container, Content, Button as Btn, Icon } from 'native-base';
import { observer } from 'mobx-react/native'

@observer
export default class DeletePortfolioComponent extends React.Component {

   constructor (props) {
        super(props)
        const {name} = this.props.navigation.state.params
                console.log(this.props)

        this.state = {
            portfolio: this.props.portfolioStore.getByName(name)
        }
    }

    remove = (item) => {
        if (item) {
            const { portfolioStore } = this.props
            portfolioStore.remove(item)
            this.props.navigation.goBack()
        }
    }

        render () {
            return ( 
                <Button onPress={() => this.remove(this.state.portfolio) }>
                    <Icon name={'trash'} size={16} />
                </Button>
        )
    }

}