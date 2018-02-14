

    //let array=JSON.parse(localStorage.getItem('Tasks Array'));
let array=[];

class Actions {
     static store=(store)=>{
         array=store;
         return array
     }
static Add=(id,task)=>{
    let item={
        id:id,
        task:task
    }
    array.push(item);
    localStorage.setItem('Tasks Array',JSON.stringify(array));
    return array

    
    
}
static RemoveItem=(id)=>{
     array=array.filter((Task)=> Task.id!==id)
     localStorage.setItem('Tasks Array',JSON.stringify(array));
     return array
     
}
static findById=(id)=>{
    let validLink=array.filter((item)=>{
        return item.id===id
        })
        if (validLink.length>0){
            return array.find(item=>item.id===id).task;
            
        }
        else {
            return ''
        }
        
    }

static getAllData=()=>{
    localStorage.setItem('Tasks Array',JSON.stringify(array));
    return array
}
static editTask=(id,object)=>{
    
    array=array.map((Task)=>{
        if(Task.id===id){
            return {...Task,...object}
        }else{
            return Task
        }
    })
    localStorage.setItem('Tasks Array',JSON.stringify(array));
    return array
    
   
}
static errorCheck=(task)=>{
    let error=array.filter((item)=>{
        return item.task.toLowerCase()===task.toLowerCase();
    })
    return error
    
}

}


export default Actions

