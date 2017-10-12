import React from 'react'
import { TouchableOpacity, Text } from '@shoutem/ui' 
import Icon from 'react-native-vector-icons/FontAwesome'

const SaveButton = (props) => (
    <TouchableOpacity onPress={() => props.save()}>
        <Icon name={'save'} size={24} />
        <Text>Save</Text>
    </TouchableOpacity>
)

const DeleteButton = (props) => (
    <TouchableOpacity onPress={() => props.alert()}>
        <Icon name={'trash'} size={24} />
    </TouchableOpacity>
)

export {
    SaveButton,
    DeleteButton
}