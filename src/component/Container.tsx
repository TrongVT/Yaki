import React from 'react';
import { View, SafeAreaView, ViewStyle } from 'react-native';
import { } from 'react'
type ContainerProps = {
    children: React.ReactNode,
    style?: ViewStyle
}

export function Container({ children, style }: ContainerProps) {
    return (
        <SafeAreaView style={[{ flex: 1 }, style]}>
            {children}
        </SafeAreaView>
    )
}