// libraries
import React, { Component } from 'react'

// components
import { Text as Txt } from 'react-native'

// assets
import { Colors } from '../../assets'

// utils
import { Pixel } from './../../utils'

type Props = {
    children: ReactNode,
    style?: Object | Array<Object>,
    center?: boolean,
    right?: boolean,
    size?: number,
    color?: string | null,
    light?: boolean,
    medium?: boolean,
    bold?: boolean,
    lines?: number,
    shadow?: number
};

type State = {};

export default class TextComponent extends React.Component<Props, State> {
    state = {}

    render() {
        const { style, size, color, light, medium, bold, center, right, lines, shadow } = this.props
        return (
            <Txt
                {...(lines ? { numberOfLines: lines } : {})}
                style={[
                    {
                        fontSize: Pixel.toSp(14), color: Colors.text.onScreen.ligth
                    },
                    size ? { fontSize: Pixel.toSp(size) } : {},
                    color ? { color: color } : {},
                    light ? { fontWeight: '100' } : {},
                    medium ? { fontWeight: 'normal' } : {},
                    bold ? { fontWeight: 'bold' } : {},
                    center ? { textAlign: 'center' } : {},
                    right ? { textAlign: 'right' } : {},
                    style ? style : {},
                    shadow ? {
                        textShadowColor: '#000',
                        textShadowOffset: { width: Pixel.toDp(1), height: Pixel.toDp(1) },
                        textShadowRadius: Pixel.toDp(1)
                    } : {},
                ]}
            >
                {this.props.children}
            </Txt>
        )
    }
}

export const Text = TextComponent