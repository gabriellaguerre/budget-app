const GET_CATEGORY = 'bank_category/GET_CATEGORY'


const get_category = (data) => ({
    type: GET_CATEGORY,
    payload: data
})

export const getCategory = () => async (dispatch) => {
    const response = await fetch('/api/bank_category', {
        headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
        const data = await response.json()
        console.log(data, 'DATAAAAAAAAAAAAAAAAAAAAAA')
        dispatch(get_category(data))
    }
}

const initialState = {}

export default function reducer(state = initialState, action) {
    const newState = {...state}
    switch(action.type) {
        case GET_CATEGORY:
            console.log(action.payload.bank_category, 'OOOOOOOOOOOOOO')
            newState['bank_category'] = action.payload.bank_category
            return newState
        default:
            return state;
    }
}
