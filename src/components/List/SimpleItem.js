// libraries
import React from 'react'

// components
import { View } from 'react-native'
import { Text } from '../../components'

import Touchable from 'react-native-platform-touchable'

// assets
import { Colors } from '../../assets'

// utils
import { Strings, Pixel } from '../../utils'

type Props = {
    title: string,
    // esta propiedad es requierida en distribucion. Opcional en desarrollo.
    onPress?: () => void,

    rightHelper?: string | null,
    backgroundColor?: string | null,
    disabled?: boolean
};

type State = {};

class SimpleItemListComponent extends React.Component<Props, State> {
    state = {}

    render() {
        const { title, onPress, rightHelper, backgroundColor, disabled } = this.props

        return (
            <Touchable
                style={[
                    backgroundColor ? { backgroundColor } : {},
                    disabled ? { opacity: 0.5 } : {}
                ]}
                disabled={disabled}
                onPress={() => {
                    if (onPress)
                        onPress()
                }}
            >
                <View
                    style={[
                        style.container,
                    ]}
                >
                    <Text color={'#111'} lines={1}>
                        {title ? title : 'NO TITLE'}
                    </Text>
                    {rightHelper && !Strings.isEmpty(rightHelper) &&
                        (
                            <View
                                style={[
                                    style.helper,
                                ]}
                            >
                                <Text size={12}>{rightHelper}</Text>
                            </View>
                        )
                    }
                </View>
            </Touchable>
        )
    }
}

export const SimpleItem = SimpleItemListComponent
export default SimpleItem

const style = {
    root: {},
    container: {
        padding: Pixel.toDp(15),
        paddingTop: Pixel.toDp(11),
        paddingBottom: Pixel.toDp(11),
        flexDirection: 'row',
        alignItems: 'center',
    },
    helper: {
        marginLeft: 'auto'
    },
}