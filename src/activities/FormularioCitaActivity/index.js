// libraries
import React from 'react'
import moment from 'moment'
// components
import { View, DatePickerAndroid, TouchableOpacity, TimePickerAndroid } from 'react-native'
import { Text, Screen, Subtitle } from '../../components'
import { TextField } from 'react-native-material-textfield'

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
type State = {
    nombre: string
};

class FormularioCitaActivity extends React.Component<Props, State> {
    constructor(props) {
        super(props)

        /**
         * Registra el metodo para encargarse de los estados de la actividad
         */
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        let titulo = 'Crear Cita'
        if (this.props.edit) {
            titulo = 'Editar cita'
        }

        /**
         * Para poner titulo a la vista
         */
        this.props.navigator.setTitle({
            title: titulo
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
                title: 'Guardar',
                id: 'save',
                buttonColor: 'white'
            },
        ]
    }

    /**
     * Estado de la aplicacion
     */
    state = {
        nombre: '',
        telefono: '',
        celular: '',
        correo: '',
        fecha: '',
        hora: '12:00',
        mascota: '',
        info: '',
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    componentWillMount() {

        this.setState({ ...this.props.cita })
    }

    /**
     * Render de la aplicacion
     */
    render() {
        return (
            <Screen>
                <Subtitle title={'Datos del Cliente'} />
                <Padding>
                    <TextField
                        label='Nombre'
                        value={this.state.nombre}
                        onChangeText={(valor) => this.setState({ nombre: valor })}
                    />
                    <TextField
                        label='Telefono'
                        value={this.state.telefono}
                        onChangeText={(valor) => this.setState({ telefono: valor })}
                    />
                    <TextField
                        label='Celular'
                        value={this.state.celular}
                        onChangeText={(valor) => this.setState({ celular: valor })}
                    />
                    <TextField
                        label='Correo'
                        value={this.state.correo}
                        onChangeText={(valor) => this.setState({ correo: valor })}
                    />
                </Padding>
                <Subtitle title={'Datos de contacto'} />
                <Padding>
                    <TextField
                        onTouchStart={() => { this.showPicker(this.state.fecha) }}
                        label='Fecha'
                        value={this.state.fecha}
                    />
                    <TextField
                        onTouchStart={() => { this.showHourPicker(this.state.hora) }}
                        label='Hora'
                        value={this.state.hora}
                    />
                </Padding>
                <Subtitle title={'Mascota'} />
                <Padding>
                    <TextField
                        label='Mascota'
                        value={this.state.mascota}
                        onChangeText={(valor) => this.setState({ mascota: valor })}
                    />
                </Padding>
                <Subtitle title={'Otra informacion'} />
                <Padding>
                    <TextField
                        multiline
                        label='Otra infomarcion'
                        value={this.state.info}
                        onChangeText={(valor) => this.setState({ info: valor })}
                    />
                </Padding>
            </Screen>
        )
    }

    showPicker(fecha) {
        const hoy = moment(fecha);

        console.log(hoy.year, hoy.month, hoy.day);

        (async () => {
            try {
                const { action, year, month, day } = await DatePickerAndroid.open({
                    // Use `new Date()` for current date.
                    // May 25 2020. Month 0 is January.
                    date: new Date(hoy.year(), hoy.month(), hoy.date())
                });
                if (action !== DatePickerAndroid.dismissedAction) {
                    // Selected year, month (0-11), day
                    this.setState({ fecha: year + '-' + zeroPad((month + 1)) + '-' + zeroPad(day) })
                }
            } catch ({ code, message }) {
                console.warn('Cannot open date picker', message);
            }
        })()
    }

    showHourPicker(tiempo) {
        const arrayTeimpo = tiempo.split(':');
        const hora = parseInt(arrayTeimpo[0]);
        const minuto = parseInt(arrayTeimpo[1]);
        (async () => {
            try {
                const { action, hour, minute } = await TimePickerAndroid.open({
                    hour: hora,
                    minute: minuto,
                    is24Hour: false, // Will display '2 PM'
                });
                if (action !== TimePickerAndroid.dismissedAction) {
                    // Selected hour (0-23), minute (0-59)
                    this.setState({ hora: hour + ':' + zeroPad(minute) })
                }
            } catch ({ code, message }) {
                console.warn('Cannot open time picker', message);
            }
        })()
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

        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'save') {
                alert('guardado')
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
export const FormularioCita_Activity = FormularioCitaActivity
export default FormularioCita_Activity


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


function zeroPad(numberStr) {
    return String(numberStr).padStart(2, "0");
}
