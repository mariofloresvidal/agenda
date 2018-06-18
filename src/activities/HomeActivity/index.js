// libraries
import React from 'react'

// components
import { View } from 'react-native'
import { Text, Screen, List } from '../../components'

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

class HomeActivity extends React.Component<Props, State> {
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
            title: 'Veterinaria JR'
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
                icon: Icons.Mas,
                buttonColor: Colors.text.onPrimary.color,
                id: 'new'
            }
        ]
    }

    /**
     * Estado de la aplicacion
     */
    state = {
        items: [
            {
                id: 1,
                nombre: 'Mario',
                telefono: '22123456',
                celular: '32212345645',
                correo: 'email@email.com',
                fecha: '2018-05-18',
                hora: '12:00',
                mascota: 'prro',
                info: 'asdasdasdasdasdasdasd',
            },
            {
                id: 2,
                nombre: 'Nacho',
                telefono: '22123456',
                celular: '32212345645',
                correo: 'nacho@email.com',
                fecha: '2018-05-18',
                hora: '14:00',
                mascota: 'prro2',
                info: 'asdasd',
            },
        ]
    }

    /**
     * Render de la aplicacion
     */
    render() {
        return (
            <Screen>
                <List
                    data={this.state.items}
                    renderItem={(item) => { // LA VARIABLE ITEM DE ESTA FUNCION ES EL MISMO QUE LOS ITEMS DE this.state.item
                        return (
                            <List.TwoLinesItem
                                icon={Icons.Contratos}
                                title={item.nombre}
                                subtitle={item.fecha + ' ' + item.hora}
                                onPress={() => {
                                    this.props.navigator.push({
                                        screen: 'detalles.cita.index',
                                        passProps: {
                                            cita: item
                                        }
                                    })
                                }}
                            />
                        )
                    }}
                />
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
            if (event.id == 'new') { // this is the same id field from the static navigatorButtons definition
                this.props.navigator.push({
                    screen: 'formulario.cita.index'
                })
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
export const Home_Activity = HomeActivity
export default Home_Activity
