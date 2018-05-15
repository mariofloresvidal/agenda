import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Colors } from './assets'

/**
 * Importar el metodo que registra las actividades para
 * mas adelante llamarlo.
 */
import initScreens from './navigation'


/**
 * Estilos especificos para android y iOS
 */
const platformSpecificStyle = Platform.select({
    android: {
        statusBarColor: Colors.primary.dark
    },
    ios: {
        disabledBackGesture: true,
    }
})


/** 
 * Metodo para iniciar la aplicacion.
 */
export default () => {
    initScreens()
    Navigation.startSingleScreenApp({
        /**
         * Actividad inicial
         */
        screen: {
            title: 'Login',
            screen: 'login.index',
        },
        /**
         * Estilo general de la aplicacion.
         */
        appStyle: {
            navBarBackgroundColor: Colors.primary.color,
            navBarTextColor: Colors.text.onPrimary.dark,
            screenBackgroundColor: Colors.screen.light,
            navBarButtonColor: Colors.secondary.color,
            ...platformSpecificStyle
        },
        /**
         * Animacion de las actividades al aparecer y desaparecer.
         */
        animationType: 'slide-down'
    });
}

