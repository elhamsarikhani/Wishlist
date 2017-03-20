import React, { Component } from 'react';
import { Image, View, Navigator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Form, Separator,InputField, LinkField, Field, TextInput,
        SwitchField, PickerField,DatePickerField,TimePickerField } from 'react-native-form-generator';
import {Container, Header, Content, Footer, Title, Button, Card, CardItem, Left, Right, Body, Text, Toast, 
        Picker, Item, ListItem, Label, Input, Thumbnail, Fab, Grid, Row, Col} from 'native-base';

class AddItem extends Component {

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
                    <Title>Item</Title>
                </Body>
                <Right>
                    <Icon name='gift' size={30} color='#fff' />
                </Right>
            </Header>

            <Content>
                <Item>
                    <Input placeholder='Title' onChangeText={this.onTitleChange} value={this.state.title} returnKeyType="next" />
                    <Icon active name='check-circle' size={20} color={this.state.titleStyle} />
                </Item>
                <Item>
                    <Input placeholder='Description' maxLength={120} multiline={true} numberOfLines={4} returnKeyType="next"
                    style={{height: 80}} />
                </Item>
                <Item>
                    <Input placeholder='URL' keyboardType="url" returnKeyType="next" />
                </Item>
                <Item>
                    <Input placeholder='Image' returnKeyType="next" />
                    <Icon active name='photo' size={20} />
                </Item>
                <Item>
                    <Input placeholder='Price' returnKeyType="next" />
                    <Icon active name='usd' size={20} />
                </Item>

                <Text>{"\n"}</Text>
                <Button block onPress={this.save}>
                    <Text>Save</Text>
                </Button>
            </Content>
    </Container>
    );
  }
}


export default AddItem;