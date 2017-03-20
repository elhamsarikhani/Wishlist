import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image } from 'react-native';
import {   Container, Icon, DeckSwiper, Card, CardItem, Left, Body,  Thumbnail, Text } from 'native-base';

const cards = [
    {
        text: 'Card Een',
        name: 'One',
        image: require('./img/cake-1.jpg'),
    },
    {
        text: 'Card Twee',
        name: 'Twee',
        image: require('./img/cake-2.jpg'),
    },
    {
        text: 'Card Drie',
        name: 'Drie',
        image: require('./img/cake-4.jpg'),
    }
];


export default class Suggestions extends Component {

    render() {
        return (
            <Container navigator={this.props.navigator}>
            <View>
                <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                    </Left>
                                    <Body>
                                        <Text>{item.text}</Text>
                                        <Text note>NativeBase</Text>
                                    </Body>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ resizeMode: 'cover', width: null, flex: 1, height: 300 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
            </View>
            </Container>
        );
    }
}

module.exports = Suggestions;
