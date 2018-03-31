import React, { Component } from "react";
import { Container, Content, Text, Form, Label, Input, Button, View, Item } from "native-base";
import Styles from "./styles/task";
export default class Task extends Component{
    render(){
        return(
            <Container style={Styles.container}>
                <Content style={Styles.content}>
                    <Text style={Styles.theader}>Define the tasks that will help you to achieve your goal !</Text>
                    <Form style={Styles.tform}>
                        <Item fixedLabel style={Styles.tinput}>
                            <Label>Title</Label>
                            <Input />
                        </Item>
                        <Button transparent dark>
                            <Text>Add new task</Text>
                        </Button>
                        <View style={Styles.tnext}>
                            <Button><Text>Next Step</Text></Button>
                        </View>

                    </Form>
                </Content>
            </Container>
        )
    }
}