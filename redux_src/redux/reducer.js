
const initState = 0;

export default function operaCount(preState = initState, action) {
    
    const { type, data } = action;
    let newState; 
    switch (type) {
        case 'add':
            newState = preState + data;
            return newState;
        case 'sub':
            newState = preState - data;
            return newState;
        default:
            return preState;        
    }
}