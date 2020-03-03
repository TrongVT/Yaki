import * as React from 'react';
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'

type Props = {
    title?: string,
    subtitle?: string,
    _goBack?: () => void
}
export const AppBarK = ({ title, subtitle, _goBack }: Props) => (
    <View style={{ position: 'absolute' }}>
        <Appbar.Header style={{ backgroundColor: 'red', width:40, height:40,borderRadius:20}}>
            <Appbar.BackAction
                onPress={_goBack}
            />
            {title && subtitle &&
                <Appbar.Content
                    title={title}
                    subtitle={subtitle}
                />
            }
            {/* <Appbar.Action icon="magnify" onPress={this._handleSearch} /> */}
        </Appbar.Header>
    </View>
)