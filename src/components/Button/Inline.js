// libraries
import React from 'react'

// components
import { View } from 'react-native'

// assets
import { } from '../../assets'

// utils
import { } from '../../utils'

type Props = {
    children: ReactNode,

    spaceBetween?: boolean,
    center?: boolean,
    right?: boolean,
    left?: boolean,
    bottom?: boolean,
    top?: boolean,
    middle?: boolean,
};

type State = {};

class InlineComponent extends React.Component<Props, State> {
    state = {}

    render() {
        const { middle, center, right, left, bottom, top, spaceBetween } = this.props
        return (
            <View
                style={[
                    {
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    },
                    spaceBetween ? { justifyContent: 'space-between' } : {},
                    middle ? { alignItems: 'center' } : {},
                    bottom ? { alignItems: 'flex-end' } : {},
                    top ? { alignItems: 'flex-start' } : {},
                    left ? { justifyContent: 'flex-start' } : {},
                    right ? { justifyContent: 'flex-end' } : {},
                    center ? { justifyContent: 'center' } : {},
                ]}
            >
                {this.props.children}
            </View>
        )
    }
}

export const Inline = InlineComponent