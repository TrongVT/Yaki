import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '../../component'
import { List } from 'react-native-paper';

const dataSetting = [
    {
        id: 1,
        title: 'Giao diện',
        action: 'GUI',
        icon: 'cube-scan'
    },
    {
        id: 2,
        title: 'Ngôn ngữ',
        action: 'Language',
        icon: 'translate'
    },
    {
        id: 3,
        title: 'Đăng xuất',
        action: 'Logout',
        icon: 'logout'
    }
]
export default class Setting extends React.Component {
    render() {
        return (
            <Container>
                <List.Section>
                    <List.Subheader>Cài đặt</List.Subheader>
                    {dataSetting.map((x, index) => (
                        <List.Item
                            style={{borderColor:'red'}}
                            key={index}
                            title={x.title}
                            left={() => <List.Icon icon={x.icon} />}
                        />
                    ))}
                </List.Section>
            </Container>
        )
    }
}