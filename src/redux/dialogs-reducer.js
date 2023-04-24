const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

let initilaState = {
    dialogsData: [{ id: 1, name: 'Alex' },{ id: 1, name: 'Alex' }, { id: 2, name: 'Eva' }, { id: 3, name: 'Kirill' }],
    messagesData: [{ style: 'from', message: "Hello" }, { style: 'toMe', message: "I'am Alex" }, {
        id: 3, message: "It developer"
    }, { id: 4, message: 'Danil' }],
    newMessageText: 'Text message menu'
}

const dialogsReducer = (state = initilaState, action) => {
    switch (action.type) {

        case SEND_MESSAGE: {
            let newMessage = {
                id: 4, message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]
            }

        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => (
    {
        type: SEND_MESSAGE
    }
)

export const updateNewTextMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
}

export default dialogsReducer;