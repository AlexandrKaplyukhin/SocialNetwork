const SEND_MESSAGE = 'SEND_MESSAGE'

let initilaState = {
    dialogsData: [{ id: 1, name: 'Alex' },{ id: 1, name: 'Alex' }, { id: 2, name: 'Eva' }, { id: 3, name: 'Kirill' }],
    messagesData: [{ style: 'from', message: "Hello" }, { style: 'toMe', message: "I'am Alex" }, {
        id: 3, message: "It developer"
    }, { id: 4, message: 'Danil' }],
}

const dialogsReducer = (state = initilaState, action) => {
    switch (action.type) {

        case SEND_MESSAGE: {
            let newMessage = {
                id: 4, message: action.message
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }

        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (message) => (
    {
        type: SEND_MESSAGE, message
    }
)


export default dialogsReducer;