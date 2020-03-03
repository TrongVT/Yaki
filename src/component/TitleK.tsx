import * as React from 'react';
import { Text, TextStyle } from 'react-native'

type Props = React.ComponentProps<typeof Text> & {
    children: React.ReactNode,
    style?:TextStyle
}
export const TitleK = (props: Props) => (
    <Text style={[props.style,{fontSize:18, margin:4}]}>
        {props.children}
    </Text>
)