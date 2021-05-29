import React, { Component } from 'react';
import { ListItem, Icon } from 'react-native-elements';

class Resources extends Component {

    static navigationOptions = {
        title: 'Resources'
    }
    render() {
        return (
            <View>
                <ListItem.Accordian
                    content={
                        <>
                        <Icon name='globe' type='font-awesome' size={30} />
                        <ListItem.Content>
                            <ListItem.Title>Resources</ListItem.Title>
                        </ListItem.Content>
                        </>
                    }
                    isExpanded={expanded}
                    onPress={() => {
                        setExpanded(!expanded);
                    }}
                >

                </ListItem.Accordian>
            </View>
        )
    }
}

export default Resources;