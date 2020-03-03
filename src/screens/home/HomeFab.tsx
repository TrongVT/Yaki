import * as React from 'react';
import { FAB, Portal } from 'react-native-paper';

export default class FABGroupExample extends React.Component {
    state = {
        open: false,
        isFabVisible: true,
    };

    render() {
        return (
                <FAB.Group
                    style={{ marginBottom: 50 }}
                    visible={this.state.isFabVisible}
                    open={this.state.open}
                    icon={this.state.open ? 'android-auto' : 'plus'}
                    actions={[
                        { icon: 'star', label: 'Thêm đơn', onPress: () => console.log('Thêm đơn') },
                        { icon: 'email', label: 'Kiểm tra thông tin', onPress: () => console.log('Kiểm tra thông tin') },
                        { icon: 'bell', label: 'Quét mã discount', onPress: () => console.log('Quét mã discount') },
                    ]}
                    onStateChange={({ open }) => this.setState({ open })}
                    onPress={() => {
                        if (this.state.open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
        );
    }
}