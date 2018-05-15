// libraries
import React from 'react'

// components
import { View } from 'react-native'
import { Text } from '../../components'

// assets
import { } from '../../assets'

// utils
import { } from '../../utils'

/**
 * Definir la estructura de los props del componente.
 */
type Props = {};

/**
 * Definir la estructura del estado del componente.
 */
type State = {};

class TemplateActivity extends React.Component<Props, State> {
    constructor(props) {
        super(props)

        /**
         * Registra el metodo para encargarse de los estados de la actividad
         */
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        /**
         * Para poner titulo a la vista
         */
        this.props.navigator.setTitle({
            title: 'Componentes'
        })
    }

    /**
     * Objeto para definir los estilos de la actividad, 
     * ver estilos de react-native-navigation
     */
    static navigatorStyle = {}

    /**
     * Estado de la aplicacion
     */
    state = {}

    /**
     * Render de la aplicacion
     */
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>{'Template.'}</Text>
            </View>
        )
    }

    /**
     * Metodo para encvargarse de los eventos de la actividad
     */
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

/**
 * Exportar la actividad de las dos maneras. Como default o en contrante, 
 * sirve para exterder agregar otros metodos a la actividad. Como:
 * - el conect de redux
 * - subcomponentes
 * - etc.
 */
export const Template_Activity = TemplateActivity
export default Template_Activity
