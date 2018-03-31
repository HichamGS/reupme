import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Goal from './goal';
import Task from './task';
import Connect from './connect';
import FriendsList from './friendslist';
export default class ReuppApp extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs />
                <Tabs>
                    <Tab heading={<TabHeading><Text>Goal</Text></TabHeading>}>
                        <Goal />
                    </Tab>
                    <Tab heading={<TabHeading><Text>Tasks</Text></TabHeading>}>
                        <Task />
                    </Tab>
                    <Tab heading={<TabHeading><Text>Connect</Text></TabHeading>}>
                        <Connect />
                    </Tab>
                    <Tab heading={<TabHeading><Text>Share</Text></TabHeading>}>
                        <FriendsList />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}