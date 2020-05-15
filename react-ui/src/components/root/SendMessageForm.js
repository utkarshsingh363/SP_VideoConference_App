import React from 'react'

class SendMessageForm extends React.Component {
    render() {
        return (
            <form className="send-message-form">
                <input
                    placeholder="SendMessageForm"
                    type="text" />
                <button>Send</button>
            </form>
        )
    }
}

export default SendMessageForm