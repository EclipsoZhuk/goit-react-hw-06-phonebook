import { combineReducers } from 'redux';
import initialContacts from '../../contacts.json';
import { ADD_CONTACT, DELETE_CONTACT, FILTER_CHANGE } from './phonebook-types';

const contactsReducer = (state = initialContacts, { type, payload }) => {
    switch (type) {
        case ADD_CONTACT:
            if (
                state.find(
                    contact =>
                        contact.name.toLowerCase() ===
                        payload.name.toLowerCase(),
                )
            ) {
                alert(`${payload.name} is already in contacts.`);
            } else if (
                state.find(contact => contact.number === payload.number)
            ) {
                alert(`${payload.number} is already in contacts.`);
            } else if (!payload.name.trim() || !payload.number.trim()) {
                alert("Enter the contact's name and number phone!");
            } else {
                return [...state, payload];
            }
            break;

        case DELETE_CONTACT:
            return state.filter(({ id }) => id !== payload);

        default:
            return state;
    }
};

const filterReducer = (state = '', { type, payload }) => {
    switch (type) {
        case FILTER_CHANGE:
            return payload;
        default:
            return state;
    }
};

export default combineReducers({
    contactsReducer,
    filterReducer,
});
