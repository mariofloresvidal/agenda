// libraries
import React from 'react'

// components
import { View } from 'react-native'
import { Text, Subtitle, Screen } from '../../components'

// assets
import { Icons, Colors } from '../../assets'

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

class DetallesCitaActivity extends React.Component<Props, State> {
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
            title: 'Detalles Cita'
        })
    }

    /**
     * Objeto para definir los estilos de la actividad, 
     * ver estilos de react-native-navigation
     */
    static navigatorStyle = {}

    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Eliminar',
                showAsAction: 'never',
                id: 'delete'
            },
            {
                title: 'Editar',
                showAsAction: 'never',
                id: 'edit'
            },
        ]
    }

    /**
     * Estado de la aplicacion
     */
    state = {}

    /**
     * Render de la aplicacion
     */
    render() {
        const cita = this.props.cita

        return (
            <Screen>
                <Subtitle title={'Datos del Cliente'} />
                <Padding>
                    <Text bold>{'Cliente'}</Text>
                    <Text >{cita.nombre}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text bold>{'Telefono:'}</Text>
                            <Text >{cita.telefono}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text bold>{'Celular:'}</Text>
                            <Text >{cita.celular}</Text>
                        </View>
                    </View>
                    <Text bold>{'Correo:'}</Text>
                    <Text >{cita.correo}</Text>
                </Padding>
                <Subtitle title={'Datos de contacto'} />
                <Padding>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text bold>{'Fecha'}</Text>
                            <Text >{cita.fecha}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text bold>{'Hora'}</Text>
                            <Text >{cita.hora}</Text>
                        </View>
                    </View>
                </Padding>
                <Subtitle title={'Mascota'} />
                <Padding>
                    <Text bold>{'Nombre'}</Text>
                    <Text >{cita.mascota}</Text>
                </Padding>
                <Subtitle title={'Otra informacion'} />
                <Padding>
                    <Text >{cita.info}</Text>
                </Padding>
            </Screen>
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

        if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
            if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.push({
                    screen: 'formulario.cita.index',
                    passProps: {
                        edit: true,
                        cita: this.props.cita
                    }
                })
            }
            if (event.id == 'delete') { // this is the same id field from the static navigatorButtons definition
                alert('se va a eliminar')
            }
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
export const DetallesCita_Activity = DetallesCitaActivity
export default DetallesCita_Activity


const Padding = function (props) {
    return (

        <View style={{
            paddingLeft: 16,
            paddingRight: 16,
        }}>
            {props.children}
        </View>
    )
}