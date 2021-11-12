// import { ADD_CONTACT, DELETE_CONTACT, FILTER_CHANGE } from './phonebook-types';
// import { v4 as uuidv4 } from 'uuid';

// export const addContact = (name, number) => ({
//     type: ADD_CONTACT,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     },
// });

// export const deleteContact = idContact => ({
//     type: DELETE_CONTACT,
//     payload: idContact,
// });

// export const changeFilter = idContact => ({
//     type: FILTER_CHANGE,
//     payload: idContact,
// });

import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('phonebook/Add', ({ name, number }) => ({
    payload: {
        id: nanoid(),
        name: name,
        number: number,
    },
}));

export const deleteContact = createAction('phonebook/Delete');

export const changeFilter = createAction('phonebook/filterChange');
