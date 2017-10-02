import React from 'react'
import { TouchableOpacity, Text } from '@shoutem/ui' 
import Icon from 'react-native-vector-icons/FontAwesome'

const SaveButton = (props) => (
    <TouchableOpacity onPress={() => props.save()}>
        <Icon name={'save'} size={16} />
        <Text>Save</Text>
    </TouchableOpacity>
)

export {
    SaveButton
}