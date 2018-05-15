// @flow
import { PixelRatio } from 'react-native'
import { Device } from './Device'

const DPI = PixelRatio.get()
const FONT_SCALE = 1 //PixelRatio.getFontScale()
const IS_TABLET = Device.isTablet()

/**
 * Android: 
 * Corvertir pixeles a dp las medidas tales como width, paddings, margin, etc
 * iOS: 
 * pronto...
 */
const toDp = (px) => {

    // EL USUARIO ELIGIRA EL DPI y si es una TABLET MAS ADELANTE PARA EVITAR TODO ESTO

    let scale = 0.7

    if (DPI >= 1 && DPI < 1.5) {            // MDPI
        scale = IS_TABLET ? 2 : 1.5
    } else if (DPI >= 1.5 && DPI < 2) {     // HDPI
        // MI MOTOROLA
        // scale = 0.7
    } else if (DPI >= 2 && DPI < 3) {       // XHDPI
        // scale = 0.7
    } else if (DPI >= 3 && DPI < 3.5) {     // XXHDPI
        // MI HTC ONE M7
        scale = IS_TABLET ? 0.8 : 0.5
    } else if (DPI >= 3.5) {                // XXXHDPI
        // scale = 0.7
    }

    return (px * DPI) * scale

    // return (px * DPI) * (DPI === 1  // Cuando el dpi es 1, esta operacion genera medidas muy pequeñas para los dispositivos de mdpi 
    //     ? (IS_TABLET
    //         ? 2         // en el caso de que sea tablet se aumenta un 100% para que sea legible el conteido
    //         : 1.5)     // y 50% en caso de ser un celular
    //     : 0.70)
}

/**
 * Android: 
 * Se usa para el tamaño de la fuente, se calcula de la misma manera que los dp solo que
 * es escalado por el tamaño de texto que el usuario especifique en accesibilidad.
 * iOS: 
 * pronto...
 */
const toSp = (px, scale = 0) => {
    return (toDp(px) * 0.75) * (scale ? scale : FONT_SCALE)
}


export const Pixel = {
    toDp, toSp
}