import * as React from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import { Portal } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack'

class NavigationAwarePortal extends React.Component {
    state = {
        opacity: new Animated.Value(0),
    };
    render() {
        const { children } = this.props;
        return (
            <Portal>
                {/* <Animated.View
                    pointerEvents="box-none"
                    style={[styles.container, { opacity: this.state.opacity }]}>
                    {children}
                </Animated.View> */}
                {children}
            </Portal>
        )
    }
}
export default NavigationAwarePortal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});