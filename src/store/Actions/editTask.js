import React from 'react';
import {database} from '../../firebase/firebase';
export const editTask=(id,object)=>({
    type:'EDIT_TASK',
    id,
    object
})
export const editTaskFunction=(id,object)=>{
return(dispatch,getState)=>{
    const uid=getState().Auth.uid;
    return database.ref(`users/${uid}/Tasks/${id}`).update(object).then(()=>{
        dispatch(editTask(id,object))
    })
}
} 