import {AddFeature, RemoveFeature, UpdateTotal} from '../actions';

export const initState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const Reducer = (state = initState, action) => {

  console.log(action, "Line 19 -- action");
  console.log(state.additionalPrice);
  switch(action.type) {

    case AddFeature: return {
      ...state,
      car: {
        ...state.car,
          features: [...state.car.features, action.payload]
      },
      store: state.store.filter(addOn => addOn.id !== action.payload.id)
    }

    case RemoveFeature: return {
      ...state,
      car: {
        ...state.car,
        features: state.car.features.filter( addOn => addOn.id !== action.payload.id)
      },
      store: [...state.store, action.payload]
    }

    case UpdateTotal: return {
      ...state,
      additionalPrice: state.additionalPrice + action.payload
    }

    default: return state;
  }
}
