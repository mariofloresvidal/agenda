// libraries
import React from 'react'

// components
import { View } from 'react-native'
import { Text } from '../../components'

// assets
import { Colors } from '../../assets'

// utils
import { Pixel } from '../../utils'

type Props = {
    title: string,
    bgColor?: string,
    textColor?: string,
    npl?: boolean,
    medium?: boolean,
    large?: boolean,
    cardTitle?: boolean
};

type State = {};

class SubtitleComponent extends React.Component<Props, State> {
    state = {}

    render() {
        const { title, npl, cardTitle, bgColor, medium, large, textColor } = this.props

        const fontSize = medium
            ? 14
            : large
                ? 18
                : 10

        const fontColor = textColor
            ? textColor
            : Colors.secondary.color

        return (
            <View
                style={[
                    style.root,
                    npl ? { paddingLeft: 0 } : {},
                    cardTitle ? {
                        paddingTop: Pixel.toDp(8),
                        paddingBottom: Pixel.toDp(8),
                    } : {},
                    bgColor ? { backgroundColor: bgColor } : {},
                ]}
            >
                <Text size={fontSize} color={fontColor}>{title.toUpperCase()}</Text>
            </View>
        )
    }
}

export const Subtitle = SubtitleComponent
export default Subtitle

const style = {
    root: {
        padding: Pixel.toDp(16),
    }
}