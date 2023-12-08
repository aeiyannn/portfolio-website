 const THEMEMain=(data)=>{
    console.log(data)
    return(dispatch)=>{
        dispatch({
            type:"Theme_changer",
            data:data
        })
    }
}
// const deltocart=(data)=>{
// return(dispatch)=>{
//     dispatch({
//         type:"Del_To_Cart",
//         data
//     })
// }
// }
// const resetcart=()=>{
//     return(dispatch)=>{
//         dispatch({
//             type:"Reset_To_Cart",
//         })
//     }
//     }
export default THEMEMain;