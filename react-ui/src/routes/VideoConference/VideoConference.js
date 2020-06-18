import React, { Component } from 'react';

import { Jutsu } from 'react-jutsu' // Component

class VideoConference extends Component {
    state={
        roomId:'',
        password:'',
        name:''

    }

    componentWillMount(){
        localStorage.setItem('name',"your logged in user name")
        const roomId=this.props.match.params.id
        const password=this.props.match.params.password
   
        this.setState({
            roomId:roomId,
            password:password,
 
        })
    
    }

    render() {
        {console.log(this.state.password,this.state.roomId)}
        return (
                <Jutsu
                    roomName={this.state.roomId}
                    displayName={localStorage.getItem("name")}
                    password={this.state.password}
                    loadingComponent={<p>loading ...</p>} 
                    containerStyles={{width:'100wh',height:'100vh'}}/>
        );
    }
}

const mapStateToProps= state=>{
    return{

    }
  }

export default VideoConference;