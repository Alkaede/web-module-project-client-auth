import React from 'react';
import {axiosAuth} from '../utils/axiosAuth';

class FriendsList extends React.Component{
  
  state = {
    friends: []
  };


  componentDidMount(){
    this.getData();
  }

  getData = () => {
    const axios = axiosAuth();
    // console.log(axios);

    axios.get('/friends')
      .then(res => {
        // console.log('friendslist: get: res: ', res.data)
        this.setState({
          friends: res.data.filter((data) => data)
        })
        // console.log(this.state.friends)
      })
      .catch(err => console.error( 'there is an error: ', err))
  }

  friendData = () => {
    const friendD = [];
    this.state.friends.forEach(({id, name, age, email}) => {
      if(this.state.friends.length > 0){
        friendD.push({
          id: id,
          name: name,
          age: age,
          email: email
        })
      }
    })
    console.log('friendD from friendData: ', friendD);
    return friendD;
  }


  render(){
    const friends = this.friendData();
    return(
      <div className='Friends-list-container'>
        <h1>Now that you have credentials, here's a list of your friends</h1>
        <div className='friends'>
          {friends.map(friend =>
            <div>
              <h2>{friend.name}</h2>
              <h3>age: {friend.age}</h3>
              <h3>email: {friend.email}</h3>
            </div>
          )
          }
        </div>
      </div>
    )
  }
}

export default FriendsList;