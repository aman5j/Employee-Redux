const initialState={
    employeeData:{}
}

export default function RootReducer(state=initialState, action)
{
    switch(action.type)
    {
        case "ADD_EMPLOYEE":
            state.employeeData[action.payload[0]] = action.payload[1]
            console.log('EMPLOYEES:',state.employeeData)
            return {employeeData: state.employeeData}
        case "EDIT_EMPLOYEE":
            state.employeeData[action.payload[0]] = action.payload[1]
            console.log('EMPLOYEES:',state.employeeData)
            return {employeeData: state.employeeData}
        case "DELETE_EMPLOYEE":
            delete state.employeeData[action.payload[0]] 
            console.log('EMPLOYEES:',state.employeeData)
            return {employeeData: state.employeeData}
        default :
            return {employeeData: state.employeeData}
    }
}

