import React, { Component } from 'react';
import { Image, View, Navigator } from 'react-native';
import {Container, Header, Content, Footer, Title, Button, Card, CardItem, Left, Right, Body, Text, Toast, 
        Picker, Item, ListItem, Label, Input, Thumbnail, Fab} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInputMask} from 'react-native-masked-text';
import ActionButton from 'react-native-action-button';
import DatePicker from 'react-native-datepicker'

class Wishlist extends Component {

    constructor(props) {
        super(props); 
        this.saveWishlist = this.saveWishlist.bind(this);
        this.showItem = this.showItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.goBack = this.goBack.bind(this);

        this.state = {
            date: '',
            active: false
        }
    }

    goBack() {
        this.props.navigator.pop();
    }

    showItem(){
       this.props.navigator.push({
            name: 'ShowItem'
        });
    }

    addItem(){
       this.props.navigator.push({
            name: 'AddItem'
        });
    }

    saveWishlist(){
        Toast.show({
                text: 'Wishlist is saved!',
                position: 'bottom',
                buttonText: 'Okay'
            })
    }

    onDateChange(text) {
       //validate the date
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
                    <Title>Wishlist</Title>
                </Body>
                <Right>
                    <Icon name='list-alt' size={30} color='#fff' />
                </Right>
            </Header>

            <Content>
                <Card>
                   <DatePicker
                        date={this.state.date}
                        mode="date"
                        iconSource={require('./img/cal.png')}
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 30
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                </Card>

                <Card>
                    <CardItem header>
                        <Text>Items</Text>
                    </CardItem>

                    <CardItem onPress={this.showItem}>
                        <Thumbnail source={require('./img/cake-1.jpg')} />
                        <Text>Cheese cake</Text>
                        <Right>
                            <Icon name='chevron-right' size={20} color='blue' />
                        </Right>
                    </CardItem>
                    <CardItem onPress={this.showItem}>
                        <Thumbnail source={require('./img/cake-2.jpg')} />
                        <Text>Chocolate cake</Text>
                        <Right>
                            <Icon name='chevron-right' size={20} color='blue' />
                        </Right>
                    </CardItem>
                    <CardItem footer>
                        <Icon name='plus' size={25} color='blue' onPress={this.addItem} />
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


export default Wishlist;