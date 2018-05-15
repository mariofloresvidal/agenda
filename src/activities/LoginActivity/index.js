// libraries
import React from 'react'

// components
import { View, Image } from 'react-native'
import { Text, Button } from '../../components'
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-material-textfield';
import * as Animatable from 'react-native-animatable';
// assets
import { Icons, Colors } from '../../assets'

// utils
import { Pixel, Strings } from '../../utils'

type Props = {};

type State = {
    username: string,
    password: string,
    usernameError: string,
    passwordError: string,
};

class LoginActivity extends React.Component<Props, State> {
    constructor(props) {
        super(props)

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    static navigatorStyle = {
        navBarHidden: true,
        drawUnderStatusBar: true,
        statusBarColor: 'transparent',
    }

    state = {
        loading: false,
        username: '',
        password: '',
        usernameError: null,
        passwordError: null
    }

    render() {
        const { loading, username, password, usernameError, passwordError } = this.state
        return (
            <View style={{
                flex: 1,
            }}>
                <LinearGradient
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    start={{
                        x: 0.0,
                        y: 0.25
                    }}
                    end={{
                        x: 0.5,
                        y: 1.0
                    }}
                    colors={[
                        '#0176C3', '#FAFAFA', '#4CAF50'
                    ]}
                >
                    <View
                        style={{
                            width: '80%',
                            backgroundColor: 'white',
                            padding: Pixel.toDp(15),
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 2,
                        }}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                style={{
                                    width: 120,
                                    height: 120,
                                }}
                                source={Icons.Logo}
                            />
                        </View>
                        <Animatable.View
                            animation="fadeInDown"
                            delay={500}
                        >

                            <TextField
                                ref={(ref) => { this.usernameInput = ref }}
                                onEndEditing={() => {
                                    this.passwordInput.focus()
                                }}
                                tintColor={Colors.primary.color}
                                label='Usuario'
                                value={username}
                                error={usernameError}
                                returnKeyType={'next'}
                                onChangeText={(username) => this.setState({ username })}
                            />
                            <TextField
                                ref={(ref) => { this.passwordInput = ref }}
                                secureTextEntry={true}
                                tintColor={Colors.primary.color}
                                label='Contrase;a'
                                value={password}
                                error={passwordError}
                                onChangeText={(password) => this.setState({ password })}
                                onSubmitEditing={() => {
                                    this.onSubmit()
                                }}
                            />
                            <View style={{ height: Pixel.toDp(15) }} />
                            <Button
                                secondary
                                loading={loading}
                                title={'Iniciar Sesion'}
                                onPress={() => {
                                    this.onSubmit()
                                }}
                            />
                        </Animatable.View>
                    </View>
                </LinearGradient>
            </View>
        )
    }

    onSubmit() {
        const { username, password } = this.state

        this.usernameInput.blur()
        this.passwordInput.blur()

        const errors = {};

        if (Strings.isEmpty(username)) {
            errors.usernameError = 'Este campo es obligatorio'
        } else {
            errors.usernameError = null
        }

        if (Strings.isEmpty(password)) {
            errors.passwordError = 'Este campo es obligatorio'
        } else {
            errors.passwordError = null
        }

        if (!Strings.isEmpty(errors.usernameError) | !Strings.isEmpty(errors.passwordError)) {
            this.setState({ ...errors })
            return
        } else {
            this.setState({ ...errors, loading: true })
        }

        // simular peticion
        setTimeout(() => {
            this.setState({ loading: false })
            this.props.navigator.resetTo({
                screen: 'components.index'
            })
        }, 2000)
    }

    onNavigatorEvent(event) {
        switch (event.id) {
            case 'willAppear':
                break;
            case 'didAppear':
                break;
            case 'willDisappear':
                break;
            case 'didDisappear':
                break;
            case 'willCommitPreview':
                break;
        }
    }
}

export const Login_Activity = LoginActivity
export default Login_Activity
