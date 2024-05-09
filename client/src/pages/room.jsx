import React from 'react';
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
    const {roomId} = useParams();
    const myMeeting = async(element) => {
        const appID = 1117295655;
        const serverSecret = "f267fa0207b88fc3b666893e2ceef0c5";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Test");
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
            }
        );
    }
    return (
        <div className="room-page">
            <div ref={myMeeting}/>
        </div>
    );
}

export default RoomPage;