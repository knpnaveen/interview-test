
let inItData = {
    transactions: [
        {
            "id": 1,
            "desc": "Test 1",
            "amount": 120,
            "date":"01/01/2021"
        },
        {
            "id": 2,
            "desc": "Test 2",
            "amount": 60,
            "date":"02/01/2021"
        }
    ]
}
const TxReducer = (state = inItData,action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                transactions:[
                    ...state.transactions,
                    action.payload
                ]
            }
        case 'DELETE':
            return {
                ...state,
                transactions: action.payload
            }
        default:
            return {...state}
    }
}

export default TxReducer;
