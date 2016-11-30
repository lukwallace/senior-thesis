import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import styles from '../styles/ChatList';
import ChatTile from '../components/ChatTile';
// import Tradesman from './Tradesman';

class ChatList extends React.Component {
  // componentDidMount() {
  //   const { updateWorkers } = this.props;
  //   updateWorkers();
  // }
  render() {
    const { chatList, goToChat, profile } = this.props;
    return (
      <View >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical
        >
          {chatList &&
            chatList.map((chat, i) =>
            (<ChatTile
              key={i}
              chat={chat}
              goToChat={goToChat}
              profile={profile}
            />),
          )}
        </ScrollView>
      </View>
    );
  }
}

ChatList.propTypes = {
  chatList: React.PropTypes.array,
  goToChat: React.PropTypes.func,
  profile: React.PropTypes.object,
};

export default ChatList;
