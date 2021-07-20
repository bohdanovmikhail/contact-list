const initialState = [
  {
    firstName: 'John 1',
    lastName: 'Smith 1',
    phone: '+389034567',
    email: 'jhon.smith@gmail.com',
  },
  {
    firstName: 'John 2',
    lastName: 'Smith 2',
    phone: '+389034567',
    email: 'jhon.smith@gmail.com',
  },
  {
    firstName: 'John 3',
    lastName: 'Smith 3',
    phone: '+389034567',
    email: 'jhon.smith@gmail.com',
  }
];

export default function contactListReducer(state = initialState, action) {
  switch (action.type) {
    case 'CONTACT_CREATE':
      return state;

    case 'CONTACT_UPDATE':
      return state;

    case 'CONTACT_DELETE':
      return state;

    default:
      return state;
  }
}
