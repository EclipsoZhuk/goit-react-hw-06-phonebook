import { ADD_CONTACT, DELETE_CONTACT, FILTER_CHANGE } from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

export const AddContact = (name, number) => ({
    type: ADD_CONTACT,
    payload: {
        id: uuidv4(),
        name,
        number,
    },
});

export const DeleteContact = idContact => ({
    type: DELETE_CONTACT,
    payload: idContact,
});

export const changeFilter = idContact => ({
    type: FILTER_CHANGE,
    payload: idContact,
});
