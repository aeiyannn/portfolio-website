const intialState=[]
const data=(state=intialState,action)=>{
    console.log(state)
switch(action.type){
    case "Theme_changer":
    return{data:action.data}
    
    default:
        return state
}
};
export default data

