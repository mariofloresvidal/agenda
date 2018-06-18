// @flow
import { Navigation } from 'react-native-navigation'

/**
 * Importar actividades para su registro en el router.
 */
import {
    Template_Activity,
    Components_Activity,
    Login_Activity,
    Home_Activity,
    DetallesCita_Activity,
    FormularioCita_Activity
} from '../activities'

/**
 * Este metodo es para registrar las actividades de la aplicacion.
 */
export default () => {
    registerComponent(`template.index`, Template_Activity);
    registerComponent(`components.index`, Components_Activity);
    registerComponent(`login.index`, Login_Activity);
    registerComponent(`home.index`, Home_Activity);
    registerComponent(`detalles.cita.index`, DetallesCita_Activity);
    registerComponent(`formulario.cita.index`, FormularioCita_Activity);
}

/**
 * Metodo para simplificar el registro de las actividades.
 */
function registerComponent(id, component) {
    Navigation.registerComponent(
        id,
        () => component
    )
}