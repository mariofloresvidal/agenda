// libraries
import React from 'react'

// components
import { View, Image } from 'react-native'
import { Text, Button } from '../../components'

import Touchable from 'react-native-platform-touchable'

// assets
import { } from '../../assets'

// utils
import { Strings, Pixel } from '../../utils'

type Props = {
    title: string,
    // esta propiedad es requierida en distribucion. Opcional en desarrollo.
    onPress?: () => void,

    subtitle?: string,
    icon?: number,
    rightAction?: {
        title: string,
        onPress: () => void
    },
    iconAction?: {
        title: string,
        onPress: () => void
    },
    backgroundColor?: string | null,
    disabled?: boolean
};

type State = {};

class SimpleItemListComponent extends React.Component<Props, State> {
    state = {}

    render() {
        const { title, subtitle, onPress, icon, backgroundColor, disabled, rightAction, iconAction } = this.props


        return (
            <Touchable
                onPress={() => {
                    if (onPress)
                        onPress()
                }}
                style={[
                    backgroundColor ? { backgroundColor } : {},
                    disabled ? { opacity: 0.5 } : {}
                ]}
                disabled={disabled}
            >
                <View
                    style={[
                        style.container,
                    ]}
                >
                    {icon && (
                        <View
                            style={{
                                backgroundColor: 'gray',
                                padding: Pixel.toDp(12),
                                marginRight: Pixel.toDp(16),
                                borderRadius: 200
                            }}
                        >
                            <Image
                                style={{
                                    tintColor: 'white',
                                    width: Pixel.toDp(16),
                                    height: Pixel.toDp(16),
                                }}
                                source={icon}
                            />
                        </View>
                    )}

                    <View
                        style={[
                            style.titleContainer,
                        ]}
                    >
                        <Text
                            style={[
                                style.titleText,
                            ]}
                            lines={1}
                            size={16}
                        >{title}</Text>
                        {subtitle && !Strings.isEmpty(subtitle) &&
                            (
                                <Text
                                    style={[
                                        style.subtitleText,
                                    ]}
                                    lines={1}
                                    size={12}
                                >{subtitle}</Text>
                            )
                        }
                    </View>
                    {iconAction &&
                        (
                            <View
                                style={[
                                    style.icon,
                                ]}
                            >
                                <Button.Icon icon={iconAction.icon} onPress={iconAction.onpress} />
                            </View>
                        )
                    }
                    {rightAction &&
                        (
                            <View
                                style={[
                                    style.icon,
                                ]}
                            >
                                <Button title={rightAction.title} onPress={rightAction.onPress} />
                            </View>
                        )
                    }
                </View>
            </Touchable>
        )
    }
}

export const TwoLinesItem = SimpleItemListComponent
export default TwoLinesItem

const style = {
    root: {},
    container: {
        padding: Pixel.toDp(16),
        paddingTop: Pixel.toDp(15),
        paddingBottom: Pixel.toDp(15),
        flexDirection: 'row',
        alignItems: 'center',

    },
    titleContainer: {},
    titleText: {

    },
    subtitleText : {
        paddingTop: Pixel.toDp(8),
    },
    icon: {
        marginLeft: 'auto'
    },
}