import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
export default class IconWithBadge extends React.Component {
    render() {
        const { badgeCount, icon } = this.props;
        return (
            <SafeAreaView style={{ width: 24, height: 24, margin: 5 }}>
                <Image source={icon} style={{ height: 24, width: 24 }} />
                {badgeCount > 0 && (
                    <SafeAreaView
                        style={{
                            // If you're using react-native < 0.57 overflow outside of parent
                            // will not work on Android, see https://git.io/fhLJ8
                            position: 'absolute',
                            right: -6,
                            top: -3,
                            backgroundColor: 'red',
                            borderRadius: 6,
                            width: 12,
                            height: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                            {badgeCount}
                        </Text>
                    </SafeAreaView>
                )}
            </SafeAreaView>
        );
    }
}