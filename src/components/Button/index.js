// libraries
import React, { Component } from 'react'

// components
import { View, ActivityIndicator } from 'react-native'
import { Text } from '../'
import Touchable from 'react-native-platform-touchable'

import { Icon } from './Icon'
import { Inline } from './Inline'
// assets
import { Colors } from '../../assets'

// utils
import { Pixel } from './../../utils'

/**
 * Definir la estructura de los props del componente.
 */
type Props = {
    title: string,
    primary?: boolean,
    secondary?: boolean,
    loading?: boolean,
    disabled?: boolean,
    onPress?: () => void,
};

/**
 * Definir la estructura del estado del componente.
 */
type State = {};

export default class ButtonComponent extends React.Component<Props, State> {

    static Icon: typeof Icon = Icon;
    static Inline: typeof Inline = Inline;

    state = {}

    render() {
        const { title, primary, secondary, loading, disabled, onPress } = this.props

        const background_color = primary
            ? Colors.primary.color
            : secondary
                ? Colors.secondary.color
                : 'transparent'

        const text_color = primary
            ? Colors.text.onPrimary.color
            : secondary
                ? Colors.text.onSecondary.color
                : null

        const btn_diabled = loading || disabled;

        return (
            <Touchable
                style={{
                    backgroundColor: background_color,
                    opacity: btn_diabled ? 0.7 : null
                }}
                disabled={btn_diabled}
                onPress={() => {
                    if (onPress)
                        onPress()
                }}
            >
                <View style={{
                    padding: Pixel.toDp(15),
                    paddingTop: Pixel.toDp(8),
                    paddingBottom: Pixel.toDp(8),
                }}>
                    {loading ? (
                        <ActivityIndicator size={'small'} color={text_color} />
                    ) : (
                            <Text center
                                color={text_color}
                            >
                                {
                                    title
                                        ? title.toUpperCase()
                                        : 'NO TITLE'
                                }
                            </Text>
                        )}
                </View>
            </Touchable>
        )
    }
}

export const Button = ButtonComponent