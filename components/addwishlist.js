import React, { Component } from 'react';
import { Image, View, Navigator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Form, Separator,InputField, LinkField, Field, TextInput,
        SwitchField, PickerField,DatePickerField,TimePickerField } from 'react-native-form-generator';
import {Container, Header, Content, Footer, Title, Button, Card, CardItem, Left, Right, Body, Text, Toast, 
        Picker, Item, ListItem, Label, Input, Thumbnail, Fab, Grid, Row, Col} from 'native-base';

class AddWishlist extends Component {

    constructor(props) {
        super(props); 
        this.goBack = this.goBack.bind(this);
        this.state = {
            date: new Date(),
            titleStyle: 'red',
            title: ''
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.save = this.save.bind(this);
    }

    goBack() {
        this.props.navigator.pop();
    }

    save() {
        this.goBack();
    }

    onTitleChange(value) {
        if(!value || value ===''){
            this.setState({titleStyle: 'red', title: value});
        }
        else{
            this.setState({titleStyle: 'green', title: value});
        }
    }


    render() {
    return (
        <Container navigator={this.props.navigator}>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='chevron-circle-left' size={30} color='#fff' onPress={this.goBack} />
                    </Button>
                </Left>
                <Body>
                    <Title>Add wishlist</Title>
                </Body>
                <Right>
                    <Icon name='list-alt' size={30} color='#fff' />
                </Right>
            </Header>

            <Content>
                <Text>{"\n"}</Text>
                <Item>
                    <Input placeholder='Title' onChangeText={this.onTitleChange} value={this.state.title} />
                    <Icon active name='check-circle' size={20} color={this.state.titleStyle} />
                </Item>

                <DatePickerField ref='date' placeholder='Date'
                    iconRight={
                        <Icon name='check-circle'
                            size={30}
                            style={[
                            {marginTop:7, color:"#61d062" }]}
                            />
                        }
                    minimumDate={new Date()}
                    maximumDate={new Date('1/1/2020')} />
                    
                <Text>{"\n"}</Text>
                <Button block onPress={this.save}>
                    <Text>Save</Text>
                </Button>
            </Content>
    </Container>
    );
  }
}


export default AddWishlist;