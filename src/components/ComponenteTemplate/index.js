// libraries
import React, { Component } from 'react'

// components
import { View } from 'react-native'

import {} from '../../components'

// assets
import { Colors } from '../../assets'

// utils
import { Pixel } from './../../utils'

/**
 * Definir la estructura de los props del componente.
 */
type Props = {};

/**
 * Definir la estructura del estado del componente.
 */
type State = {};

export default class TemplateComponent extends React.Component<Props, State> {
    state = {}

    render() {
        const { } = this.props
        return (
            <View>
                {this.props.children}
            </View>
        )
    }
}

export const Template = TemplateComponent