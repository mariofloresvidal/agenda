// libraries
import React from 'react'

// components
import { View, Image } from 'react-native'

import { Text, Screen, Button, List, Subtitle, ImagePicker } from '../../components'

// assets
import { Icons } from '../../assets'

// utils
import { } from '../../utils'

type Props = {
    navigator: {
        push: ({ screen: string }) => void
    }
};

type State = {
    items: []
};

class ComponentsActivity extends React.Component<Props, State> {
    constructor(props) {
        super(props)

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.props.navigator.setTitle({
            title: 'Componentes'
        })
    }

    static navigatorStyle = {}

    state = {
        items: [
            {
                id: 1,
                nombre: 'Nombre 1',
                otra_info: 'otra info 1'
            },
            {
                id: 2,
                nombre: 'Nombre 2',
                otra_info: 'otra info 2'
            },
            {
                id: 3,
                nombre: 'Nombre 3',
                otra_info: 'subtitulo'
            },
            {
                id: 4,
                nombre: 'Nombre 3',
                otra_info: 'fecha'
            },
        ]
    }

    render() {
        return (
            <Screen>
                <Image source={Icons.Perro} />


                <Text center bold size={18}>{'<Button />'}</Text>
                <Button
                    title={'Default'}
                />
                <Button primary disabled
                    title={'Primary Disabled'}
                />
                <Button primary
                    title={'OPEN TEMPLATE'}
                    onPress={() => {
                        this.props.navigator.push({
                            screen: 'template.index'
                        })
                    }}
                />
                <Button secondary
                    title={'Secondary'}
                />
                <Button secondary loading
                    title={'Secondary'}
                />
                <Button secondary />

                <Text center bold size={18}>{'<Button.Icon />'}</Text>
                <Button.Icon secondary icon={Icons.Perro} />
                <Button.Icon bgColor={'white'} icon={Icons.Contratos} />
                <Button.Icon secondary medium loading icon={Icons.Contratos} />
                <Button.Icon secondary large icon={Icons.Perro} />

                <Text center bold size={18}>{'<Button.Inline />'}</Text>
                <Button.Inline>
                    <Button
                        title={'Default'}
                    />
                    <Button primary
                        title={'Primary'}
                    />
                    <Button secondary
                        title={'Iniciar Sesion'}
                        onPress={() => {
                            this.props.navigator.push({
                                screen: 'template.index'
                            })
                        }}
                    />
                    <Button.Icon secondary icon={Icons.Contratos} />
                    <Button.Icon bgColor={'white'} icon={Icons.Contratos} />
                    <Button.Icon secondary medium icon={Icons.Contratos} />
                    <Button.Icon secondary large icon={Icons.Contratos} />
                </Button.Inline>

                <Text center bold size={18}>{'<List.SimpleItem />'}</Text>
                <List.SimpleItem
                    title={'Simple item'}
                />
                <List.SimpleItem
                    title={'Simple item con helper'}
                    rightHelper={'Helper'}
                />
                <List.SimpleItem
                    disabled
                    title={'Simple item con helper'}
                    rightHelper={'Helper'}
                />

                <Text center bold size={18}>{'<List.TwoLinesItem />'}</Text>
                <List.TwoLinesItem
                    icon={Icons.Contratos}
                    title={'Titulo principal'}
                    subtitle={'Subtitulo'}
                />
                <List.TwoLinesItem
                    title={'Titulo principal'}
                    subtitle={'Subtitulo'}
                    iconAction={{
                        icon: Icons.Contratos,
                        onPress: () => { }
                    }}
                />
                <List.TwoLinesItem
                    title={'Titulo principal'}
                    subtitle={'Subtitulo'}
                    rightAction={{
                        title: 'Iniciar reporte',
                        onPress: () => { }
                    }}
                />
                <List.TwoLinesItem
                    icon={Icons.Contratos}
                    title={'Titulo principal'}
                    subtitle={'Subtitulo'}
                    rightAction={{
                        title: 'Iniciar reporte',
                        onPress: () => { }
                    }}

                />
                <Text center bold size={18}>{'<Subtitle />'}</Text>
                <Subtitle title={'Subtitulo'} />
                <Subtitle title={'Subtitulo'} medium />
                <Subtitle title={'Subtitulo'} large />
                <Subtitle
                    medium
                    title={'PERSONALIZADO'}
                    bgColor={'white'}
                    textColor={'red'}
                />
                <Text center bold size={18}>{'<ImagePicker />'}</Text>
                {/* 
                SI QUIERES MAS DE UN BOTON EN LINEA USA EL Button.Inline, SI SOLO SERA  UNO POR LINEA NO LO USES
                 */}
                <Button.Inline>
                    <ImagePicker
                        height={150}
                        image={''} // imagen inicial
                        returnImage={(image) => {// retorna la nueva iamgen
                            console.log(image)
                        }}
                    />
                    <ImagePicker
                        height={150}
                        image={''} // imagen inicial
                        returnImage={(image) => {// retorna la nueva iamgen
                            console.log(image)
                        }}
                    />
                </Button.Inline>


                {/* 
                EJEMPLO DE COMO HACER UNA LISTA
                 */}

                <Text center bold size={18}>{'EJEMPLO DE COMO HACER UNA LISTA'}</Text>
                <List
                    separatorColor={"#000"}
                    separatorOpacity={0.12}

                    data={this.state.items}
                    renderItem={(item) => { // LA VARIABLE ITEM DE ESTA FUNCION ES EL MISMO QUE LOS ITEMS DE this.state.item
                        return (
                            <List.TwoLinesItem
                                icon={Icons.Contratos}
                                title={item.nombre}
                                subtitle={item.otra_info}
                                onPress={() => {
                                    this.props.navigator.push({
                                        screen: 'template.index'
                                    })
                                }}
                            />
                        )
                    }}
                />

            </Screen>
        )
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

export const Components_Activity = ComponentsActivity
export default Components_Activity
