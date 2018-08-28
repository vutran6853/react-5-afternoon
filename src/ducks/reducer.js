// INITAL ACTION TYPE -> IT MUST BE IN ALLCAP LETTER

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_CITY';
const UPDATE_FOUND = 'UPDATE_FOUND';


// INITAL (props) TO PASS TO COMPONENT
const initalState = {
  loadType: 'Home Purchase',
  propertyType: 'Single Family Home',
  city: '',
  propToBeUsedOn: '',
  found: false,
  readEstateAgent: 'false',
  cost: 0,
  downPatment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  firstName: '',
  lastName: '',
  email: '',
}

//CREATE ACTION CREATORS WHICH HAVE ACTION AND PAYLOAD

export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  }
}

export function updatePropertyType(property) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  }
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}

export function updateProp(prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  }
}

export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  }
}


export function updateProper() {

}

// FUNCTION TO SWITCH BASE ON THE ACTION TYPE
function reducer(state = initalState, action){
  console.log('REDUCER HIT: Action ->', action );
  switch(action.type) {
    case UPDATE_LOAN_TYPE:
      return {
        ...state,
        loadType: action.payload
    };

    case UPDATE_PROPERTY_TYPE:
      return {
        ...state,
        property: action.payload
    };

    case UPDATE_CITY:
      return {
        ...state,
        city: action.payload
      };

    case UPDATE_PROP:
      return {
        ...state,
        propToBeUsedOn: action.payload
    };

    case UPDATE_FOUND:
      return {
        ...state,
        found: action.payload
      };

    default: 
    return state;
  }
}

export default reducer;