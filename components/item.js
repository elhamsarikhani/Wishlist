import React, { Component } from 'react';
import { Image, View, Navigator } from 'react-native';
import {Container, Header, Content, Footer, Title, Button, Card, CardItem, Left, Right, Body, Text, Toast, 
        Picker, Item, ListItem, Label, Input, Thumbnail, Fab} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInputMask} from 'react-native-masked-text';
import ActionButton from 'react-native-action-button';
import DatePicker from 'react-native-datepicker'

class ShowItem extends Component {

    constructor(props) {
        super(props); 

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.navigator.pop();
    }


    render() {
    return (
        <Container navigator={this.props.navigator}>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='chevron-circle-left' size={30} color='#fff' onPress={this.goBack}/>
                    </Button>
                </Left>
                <Body>
                    <Title>Gift</Title>
                </Body>
                <Right>
                    <Icon name='gift' size={30} color='#fff' />
                </Right>
            </Header>

            <Content>
                <Card>
                    <CardItem onPress={this.showItem}>
                        <Thumbnail source={require('./img/cake-1.jpg')} />
                        <Text> Cheese cake</Text>
                    </CardItem>
                    <CardItem header>
                        <Text>Item Description{"\n"}.....{"\n"}.....</Text>
                    </CardItem>
                </Card>
            </Content>

            <ActionButton buttonColor='#5067FF' icon={<Icon name='share-alt' size={25} />}>
                <ActionButton.Item buttonColor='#34A34F' onPress={() => console.log('notes tapped!')}>
                    <Icon name='whatsapp' size={25} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3B5998' onPress={() => {}}>
                    <Icon name='facebook' size={25} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' onPress={() => {}}>
                    <Icon name='envelope' size={25} />
                </ActionButton.Item>
                <Icon name='whatsapp' size={25} />
            </ActionButton>
                
        </Container>
    );
  }
}


export default ShowItem;