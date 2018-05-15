// libraries
import React from 'react'

// components
import { View, FlatList, SectionList } from 'react-native'
import { Separator } from '../../components'

import SimpleItem from './SimpleItem'
import TwoLinesItem from './TwoLinesItem'

// assets
import { } from '../../assets'

// utils
import { Pixel } from '../../utils'

type Props = {
    renderItem: (item) => Object,
    headerItem?: (item) => Object,
    data: Array<{}>,
    keyExtractor?: (item: any, index: number) => string,
    style?: {} | [],
    cols?: number,
    renderScrollComponent?: any,
    separatorColor?: string | null,
    sectionList?: boolean,
    stickySection?: boolean,
};

type State = {
    windowWidthSize: number
};

class ListComponent extends React.Component<Props, State> {
    static SimpleItem: typeof SimpleItem = SimpleItem;
    static TwoLinesItem: typeof TwoLinesItem = TwoLinesItem;

    state = {
        windowWidthSize: 0
    }

    // shouldComponentUpdate(nextProps: any, nextState: any) {
    //     if (nextState.windowWidthSize === this.state.windowWidthSize) {
    //         return false
    //     }
    //     console.log(nextState.windowWidthSize, this.state.windowWidthSize)
    //     return true
    // }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        const {
            cols, data, keyExtractor, renderItem,
            renderScrollComponent, style, separatorColor, separatorOpacity, sectionList,
            headerItem, stickySection
        } = this.props
        if (!data || data.length === 0)
            return null

        const List = sectionList
            ? SectionList
            : FlatList

        return (
            <List
                keyboardShouldPersistTaps='handled'
                {...(
                    sectionList
                        ? {
                            sections: data,
                            renderSectionHeader: ({ section }) => headerItem(section),
                            stickySectionHeadersEnabled: stickySection
                        }
                        : { data: data }
                )}
                numColumns={cols ? cols : 1}
                {...(cols && cols > 1 ? { columnWrapperStyle: {} } : {})}
                renderItem={(data: { item: {} }) => renderItem(data.item)}
                keyExtractor={keyExtractor ? keyExtractor : this.keyExtractor}
                removeClippedSubviews={true}
                ItemSeparatorComponent={() => (
                    <Separator
                        height={cols && cols > 1 ? 0 : 2}
                        color={separatorColor ? separatorColor : 'transparent'}
                        opacity={separatorOpacity ? separatorOpacity : 1}
                    />
                )}
                style={[
                    style ? style : {}
                ]}
                {...(renderScrollComponent ? { renderScrollComponent: renderScrollComponent } : {})}

                //onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => {
                //// requerido para redimensionar la imagen
                ////alert(width + ':' + height)
                //if (this.state.windowWidthSize === width)
                //    return
                //this.setState({ windowWidthSize: width })
                //}}

                getItemLayout={(data, index) => (
                    { length: 40, offset: 40 * index, index }
                )}
            />
        )
    }

    keyExtractor(item: any, index: number): string {
        // console.log('keys', item, index)
        return item.id ? String(item.id) : String(index)
    }
}

export const List = ListComponent
export default List

