import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { Container, TitleK } from '../../component'
import { Searchbar, Card, FAB, Portal } from 'react-native-paper';
import HomeFab from './HomeFab'
const headerData = {
    "title": "The Basics - Networking",
    "description": "Your app fetched this from a remote endpoint!",
    "movies": [
        { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
        { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
        { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
        { "id": "4", "title": "Inception", "releaseYear": "2010" },
        { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
    ]
}
const menu = [
    {
        id: 1,
        title: '1',
        action: 'Page1'
    },
    {
        id: 2,
        title: '2',
        action: 'Page2'
    },
    {
        id: 3,
        title: '3',
        action: 'Page3'
    },
    {
        id: 4,
        title: '4',
        action: 'Page4'
    },
    {
        id: 5,
        title: '5',
        action: 'Page5'
    }
]
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        firstQuery: '',
    }
    render() {
        return (
            <Container>
                <View style={{}}>
                    <Searchbar
                        style={{}}
                        placeholder="Search"
                        onChangeText={query => { this.setState({ firstQuery: query }); }}
                        value={this.state.firstQuery}
                    />
                    <TitleK>Tin tức</TitleK>
                    <FlatList
                        pagingEnabled={true}
                        data={headerData.movies}
                        renderItem={({ item }) =>
                            (
                                <View style={{ width: Dimensions.get('screen').width, backgroundColor: '#fff', minHeight: 120 }}>
                                    <View style={{ margin: 2, flex: 1 }}>
                                        <Text>{item.title}-</Text>
                                        <Text>{item.releaseYear}</Text>
                                    </View>
                                </View>
                            )
                        }
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ flex: 1, paddingVertical: 2 }}>
                    <FlatList
                        data={menu}
                        numColumns={3}
                        style={{ margin: 2 }}
                        renderItem={({ item }) => (
                            <Card style={{ minHeight: 80, alignItems: 'center', margin: 2, flex: 1 }}>
                                <Text>{item.title}</Text>
                            </Card>
                        )}
                    />
                </View>
                {/* <Portal>
                    <HomeFab />
                </Portal> */}
            </Container>
        )
    }
}