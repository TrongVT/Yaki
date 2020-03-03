import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '../../component'
import { Button } from 'react-native-paper'
import { RootStackParamList } from '../../navigation/AppNavigator'
import { StackNavigationProp } from '@react-navigation/stack'

type ScreenCheckingProp = StackNavigationProp<RootStackParamList, "Checking">

type CheckingProps = {
    navigation: ScreenCheckingProp
}

export default class Checking extends React.Component<CheckingProps> {
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Text>Checking</Text>
                <View style={{ alignItems: 'center' }}>
                    <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Detail')}>
                        Go to Detail
                    </Button>
                </View>
            </Container>
        )
    }
}
