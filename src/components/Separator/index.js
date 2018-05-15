// libraries
import React from 'react'

// components
import { View } from 'react-native'
import { } from '../../components'

// assets
import { } from '../../assets'

// utils
import { Pixel } from '../../utils'

type Props = {
    color?: string | null,
    height?: number
};

type State = {};

class SeparatorComponent extends React.Component<Props, State> {
    state = {}

    render() {
        const { color, height, opacity } = this.props

        return (
            <View
                style={[
                    style.root,
                    color ? { backgroundColor: color } : {},
                    height ? { height: Pixel.toDp(height) } : {},
                    opacity ? { opacity: opacity } : 1
                ]}
            />
        )
    }
}

export const Separator = SeparatorComponent
export default Separator

const style = {
    root: {
        height: Pixel.toDp(2    ),
        backgroundColor: 'transparent'
    }
}