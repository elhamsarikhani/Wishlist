import React, { Component } from 'react';
import { Image, View, Navigator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Form, Separator,InputField, LinkField, Field, TextInput,
        SwitchField, PickerField,DatePickerField,TimePickerField } from 'react-native-form-generator';
import {Container, Header, Content, Footer, Title, Button, Card, CardItem, Left, Right, Body, Text, Toast, 
        Picker, Item, ListItem, Label, Input, Thumbnail, Fab, Grid, Row, Col} from 'native-base';


class EditProfile extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            showToast: false,
            birthday:'',
            nameStyle: 'green',
            name: 'Elham Sarikhani',
            gender: 'female'
        }

        this.saveProfile = this.saveProfile.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.navigator.pop();
    }

    saveProfile() {
        Toast.show({
              text: 'Changes to profile saved!',
              position: 'bottom',
              buttonText: 'Okay'
            })
    }

    onNameChange(value) {
        if(!value || value ===''){
            this.setState({nameStyle: 'red', name: value})
        }
        else{
            this.setState({nameStyle: 'green', name: value})
        }
    }

    onGenderChange(value) {
        this.setState({gender: value})
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
                    <Title>Profile</Title>
                </Body>
                <Right>
                    <Icon name='user' size={30} color='#fff' />
                </Right>
            </Header>

            <Form>
                <Text>{"\n"}</Text>
                <Item>
                    <Input placeholder='Name' onChangeText={this.onNameChange} value={this.state.name} />
                    <Icon active name='check-circle' size={20} color={this.state.nameStyle} />
                </Item>

                <Picker
                    iosHeader="Gender"
                    mode="dropdown"
                    selectedValue={this.state.gender}
                    onValueChange={this.onGenderChange.bind(this)}>
                    <Item label="Female" value="female" />
                    <Item label="Male" value="male" />
                    <Item label="Non-binary" value="others" />
                </Picker>

                <DatePickerField ref='birthday' placeholder='Birthday' 
                    minimumDate={new Date('1/1/1900')}
                    maximumDate={new Date()} />
                    
                <Text>{"\n"}</Text>
                <Button block onPress={this.saveProfile}>
                    <Text>Save</Text>
                </Button>
            </Form>
        </Container>
    );
  }
}


export default EditProfile;