import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { setForm } from './store/actions';
// import dicts from '../../common/dicts';

class Message extends PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      showToast: false
    }
  }

  componentDidMount () {
    // this._initMessage()
  }

  _onRefresh = () => {
    // this._initMessage()
  }

//   _initMessage = () => {
//     const { navigation, _setForm } = this.props
//     const userId = global.userId
//     if(!userId) {
//       navigation.navigate('Auth')
//     } else {
//       const sid = '3011',
//         param = {
//           USERID: userId
//         }
//       commonInf(sid, param)
//         .then(result => {
//           if(result.data.success === true) {
//             _setForm('messages', result.data.data)
//           } else {
//             Toast.show({
//               text: "获取消息失败",
//               buttonText: "好的",
//               type: "danger"
//             })
//           }
//         })
//     }
//   }

  _keyExtractor = item => item.ID

  render () {
    const { messages, navigation } = this.props 
    let now = new Date()
    return (
        <div>
            内容
        </div>
    //   <Container>
    //     <Header>
    //       <Body>
    //         <Title>消息</Title>
    //       </Body>
    //     </Header>
    //     <Content>
    //       <List>
          
    //       <FlatList 
    //           refreshControl={
    //             <RefreshControl
    //               refreshing={this.state.refreshing}
    //               onRefresh={this._onRefresh}
    //             />
    //           }
    //           data={messages}
    //           keyExtractor={this._keyExtractor}
    //           renderItem={({item}) => {
    //             let recentTimeStr = item.RECENTTIME
    //             let yesterday = new Date ()
    //             yesterday.setTime(now.getTime() - 24 * 60 * 60 * 1000)

    //             let timestr 
    //             if (recentTimeStr.substr(0, 8) === now.Format('yyyyMMdd') ) {
    //               timestr = `${recentTimeStr.substr(8, 2)}:${recentTimeStr.substr(10, 2)}`
    //             } else if(recentTimeStr.substr(0, 8) === yesterday.Format('yyyyMMdd')) {
    //               timestr = '昨天'
    //             } else if(recentTimeStr.substr(0, 8) < yesterday.Format('yyyyMMdd')) {
    //               timestr = `${recentTimeStr.substr(0, 4)}-${recentTimeStr.substr(4,2)}-${recentTimeStr.substr(6,2)}`
    //             }

    //             return (
    //               <ListItem button onPress={() => { navigation.navigate('Receive', {
    //                 msgid: item.ID
    //               })}}>
    //                 <Left style={{flexDirection: 'column', flex: 0.6}}>
    //                   <View style={{backgroundColor: colors.LVE, width: '100%'}}>
    //                     <Text style={{fontSize: 14, color: '#fff'}}>{dicts.message[item.TYPE]}</Text>
    //                   </View>
    //                   <View style={{backgroundColor: item.STATUS === '1' ?  colors.HONG : colors.LAN, width: '100%', marginTop: 5}}>
    //                     <Text style={{fontSize: 14, color: '#fff'}}>{item.STATUS === '1'? '待处理': '已处理'}</Text>
    //                   </View>
    //                 </Left>
    //                 <Body style={{flex: 2,flexDirection: 'row', justifyContent: 'center'}}>
    //                   <Text>{item.PLAN.NAME}</Text>
    //                 </Body>
    //                 <Right style={{flex: 1}}>
    //                     <Text note style={{fontSize: 10}}>{timestr}</Text>
    //                     <Text note style={{fontSize: 10}} numberOfLines={1}>
    //                     {
    //                       item.SENDUSER ? ('发送者：' + item.SENDUSER.NAME) : ''
    //                     }
    //                     {
    //                       item.RECEIVEUSER ? ('接收者：' + item.RECEIVEUSER.NAME) : ''
    //                     }</Text>
    //                 </Right>
    //               </ListItem>
    //             )
    //           }}
    //           />
    //       </List>
    //     </Content>
    //   </Container>
    )
  }
}

const mapStateToProps = state => ({
//   messages: state.message.messages
})

const mapDispatchToAction = dispatch => ({
  _setForm: (key, value) => {
    dispatch(setForm(key, value))
  }
})

export default connect(mapStateToProps, mapDispatchToAction)(Message)

// const styles = StyleSheet.create({
 
// })