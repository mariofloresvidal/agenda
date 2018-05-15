//@flow
import { Dimensions } from 'react-native'
import DiviceInfo from 'react-native-device-info'

/**
 * Checa si el dispositivo es una tablet. Retorna un valor boleano.
 */
const isTablet = () => {
    return DiviceInfo.isTablet();
}

/**
 * Checa si el dispositivo se encuentra en orientacion lanscape. Retorna un boleano
 */
const isLandscape = () => {
    const D = Dimensions.get('screen')
    const width = D.width
    const height = D.height
    return width > height
}

/**
 * Retorna el ancho de la pantalla.
 */
const screenWidth = () => {
    const D = Dimensions.get('screen')
    return D.width
}

/**
 * Retorna el alto de la pantalla.
 */
const screenHeight = () => {
    const D = Dimensions.get('screen')
    return D.height
}

/**
 * Retorna el ancho de la ventana.
 */
const windowWidth = () => {
    const D = Dimensions.get('window')
    return D.width
}

/**
 * Retorna el alto de la ventana.
 */
const windowHeight = () => {
    const D = Dimensions.get('window')
    return D.height
}

export const Device = {
    isTablet, isLandscape, screenHeight, screenWidth, windowHeight, windowWidth
}