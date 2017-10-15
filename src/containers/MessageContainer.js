class MessengerContainer extends Component {

  constructor(props) {
    super(props);

    this._messageRef = new Firebase("https://react-native-chat-sample-df507.firebaseio.com//messages");
    this._messages = [];

    this.state = {
      messages: this._messages,
      typingMessage: ''
    };
  }

  componentDidMount() {
    this._messagesRef.on('child_added', (child) => {
      this.handleReceive({
        text: child.val().text,
        name: child.val().name,
        image: {uri: child.val().avatarUrl || 'https://facebook.github.io/react/img/logo_og.png'},
        position: child.val().name == UserName && 'right' || 'left',
        date: new Date(child.val().date),
        uniqueId: child.key()
      });
    });
  }

  setMessages(messages) {
    this._messages = messages;

    this.setState({
      messages: messages,
    });
  }

  handleSend(message = {}) {
    this._messageRef.push({
      text: message.text,
      name: UserName,
      avatarUrl: AvatarUrl,
      date: new Date().getTime()
    });
  }

  handleReceive(message = {}) {
    this.setMessages(this._messages.concat(message));
  }

  render() {
    return (
      <View style={{marginTop: CONTAINER_MARGIN}}>
        <GiftMessenger
          styles={{
            bubbleRight: {
              marginLeft: 70,
              backgroundColor: '#007aff',
            },
          }}
          messages = {this.state.messages}
          handleSend = {this.handleSend.bind(this)}
          maxHeight = {Dimensions.get('window').height - STATUS_BAR_HEIGHT - CONTAINER_MARGIN}
        />
      </View>
    );
  }
}
