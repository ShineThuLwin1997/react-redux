import * as type from '../action/type';
const initialState={persons:[]};

export default (state=initialState,action)=>{
    switch (action.type){
    case type.ADDPERSON:  
    const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
    }
    return {
        ...state,
        persons: state.persons.concat( newPerson )
    }       
 
    }
    return state;
    
}

