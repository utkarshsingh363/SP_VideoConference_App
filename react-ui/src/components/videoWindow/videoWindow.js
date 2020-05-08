import React,{Component}from 'react'


import './videoWindow.css'

// export default function VideoWindow(){

//     return(
//         <video width="300" height="300" >

//             </video>
//     )
// }

export default class VideoWindow extends React.Component   {
    componentDidMount(){
    window.JitsiMeetJS.init();
    // var options={
    //     serviceUrl:'//jitsi-meet.example.com/http-bind',
    //     hosts: {
    //         // XMPP domain.
    //         domain: 'jitsi-meet.example.com',
    //         anonymousdomain: 'guest.example.com',
    //         muc: 'conference.jitsi-meet.example.com'
    //     },
    //     useStunTurn: true

    // }


    // var connection = new window.JitsiMeetJS.JitsiConnection(null, null,options);

    }
    // var connection = new JitsiMeetJS.JitsiConnection(null, null, options);
    // connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED, onConnectionSuccess);
    // connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED, onConnectionFailed);
    // connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED, disconnect);
    // connection.connect();

    // room = connection.initJitsiConference("conference1", confOptions);
    // room.on(JitsiMeetJS.events.conference.TRACK_ADDED, onRemoteTrack);
    // room.on(JitsiMeetJS.events.conference.CONFERENCE_JOINED, onConferenceJoined);

    // JitsiMeetJS.createLocalTracks().then(onLocalTracks);

    // room.join();

    render(){
    return(
            <video width="300" height="300" >

            </video>


    )
    }

}
