// @flow
// libraries
import React from 'react'

// components
import { View, ScrollView } from 'react-native'

// assets
import { Colors } from '../../assets'

// utils
import { } from '../../utils'

type Props = {
    children: ReactNode,
    asView?: boolean,
    dark?: boolean,
    light?: boolean,
    flexContent?: boolean,
    style?: Object
};

type State = {};

class ScreenComponent extends React.Component<Props, State> {
    state = {}

    render() {
        const { asView, flexContent, style, dark, light } = this.props

        const Screen = asView ? View : ScrollView

        return (
            <Screen {...this.props}
                {...(!asView ? {
                    keyboardShouldPersistTaps: 'handled',
                    contentContainerStyle: { flex: flexContent ? 1 : null }
                } : {})}
                style={[
                    { flex: 1, backgroundColor: Colors.screen.light },
                    dark ? { backgroundColor: Colors.screen.dark } : {},
                    style ? style : {},
                ]}
            >
                {this.props.children}
            </Screen>
        )
    }
}

export const Screen = ScreenComponent
export default Screen