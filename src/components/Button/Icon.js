// libraries
import React, { Component } from 'react'

// components
import { View, Image, ActivityIndicator } from 'react-native'
import Touchable from 'react-native-platform-touchable'

// assets
import { Colors } from '../../assets'

// utils
import { Pixel } from './../../utils'

type Props = {
    icon: string,
    bgColor?: string,
    primary?: boolean,
    square?: boolean,
    secondary?: boolean,
    loading?: boolean,
    disabled?: boolean,
    medium?: boolean,
    large?: boolean,
    onPress?: () => void,
};

type State = {};

export default class IconComponent extends React.Component<Props, State> {
    state = {}

    render() {
        const { icon, square, bgColor, iconColor, primary, secondary, loading, disabled, onPress, medium, large } = this.props

        const background_color = primary
            ? Colors.primary.color
            : secondary
                ? Colors.secondary.color
                : bgColor
                    ? bgColor
                    : 'transparent'

        const text_color = primary
            ? Colors.text.onPrimary.color
            : secondary
                ? Colors.text.onSecondary.color
                : iconColor
                    ? iconColor
                    : null

        const icon_size = medium
            ? 64
            : large
                ? 96
                : 32

        const icon_padding = medium
            ? 15
            : large
                ? 24
                : 5

        const btn_diabled = loading || disabled;

        return (
            <View
                style={{
                    borderRadius: square ? 0 : 200,
                    height: Pixel.toDp(icon_size),
                    width: Pixel.toDp(icon_size),
                    overflow: 'hidden'
                }}
            >
                <Touchable
                    style={{
                        flex: 1,
                        backgroundColor: background_color,
                        opacity: btn_diabled ? 0.7 : null
                    }}
                    disabled={loading}
                    onPress={() => {
                        if (onPress)
                            onPress()
                    }}
                >
                    <View style={{
                        flex: 1,
                        padding: Pixel.toDp(icon_padding),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {loading ? (
                            <ActivityIndicator size={'small'} color={text_color} />
                        ) : (
                                <Image
                                    style={{
                                        tintColor: text_color,
                                        height: '100%',
                                        width: '100%',
                                    }}
                                    resizeMode={'stretch'}
                                    source={icon}
                                />
                            )
                        }
                    </View>
                </Touchable>
            </View>
        )
    }
}

export const Icon = IconComponent