// libraries
import React, { Component } from 'react'
import RNImagePicker from 'react-native-image-picker'

// components
import { View, ImageBackground, Image } from 'react-native'
import { Button } from '../../components'
import Touchable from 'react-native-platform-touchable'

// assets
import { Colors, Icons } from '../../assets'

// utils
import { Pixel, Strings } from './../../utils'

type Props = {
    image: string,
    width?: string | number,
    height?: string | number,
    returnImage?: (image) => void,
    base64?: boolean
};

type State = {
    _image: string
};

export default class ImagePickerComponent extends React.Component<Props, State> {

    state = {
        _image: ''
    }

    componentDidMount() {
        this.setState({ _image: this.props.image })
    }

    render() {
        const { returnImage, base64, width, height } = this.props
        const { _image } = this.state


        return (
            <ImageBackground
                style={{
                    ...(
                        width ? { width } : { flex: 1 }
                    )
                }}
                resizeMode={'contain'}
                source={{ uri: _image }}
            >
                <Touchable
                    style={{
                        height: height
                            ? typeof height === "string"
                                ? height
                                : Pixel.toDp(height)
                            : null,
                    }}
                    onPress={() => {
                        this.openPicker()
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            style={{
                                width: Pixel.toDp(56),
                                height: Pixel.toDp(56),
                                tintColor: Colors.secondary.color
                            }}
                            source={Icons.Camara}
                        />
                    </View>
                </Touchable>
            </ImageBackground>
        )
    }

    openPicker() {
        const { returnImage } = this.props
        const { _image } = this.state

        var options = {
            title: 'Selecciona una imagen',
            chooseFromLibraryButtonTitle: 'Selecciona desde la libreria',
            takePhotoButtonTitle: 'Tomar foto',
            storageOptions: {
                skipBackup: true,
                path: 'TSCubo.app'
            }
        };

        RNImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // let source = { uri: };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    _image: this.props.base64
                        ? 'data:image/jpeg;base64,' + response.data
                        : response.uri
                });
            }
        });

        if (returnImage)
            returnImage(_image)
    }
}

export const ImagePicker = ImagePickerComponent