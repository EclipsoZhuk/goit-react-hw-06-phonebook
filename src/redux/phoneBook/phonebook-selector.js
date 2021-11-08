export const getFilter = state => state.phonebook.filterReducer;

export const getContacts = state => state.phonebook.contactsReducer;

export const getFilterContacts = state => {
    const lowerCaseFilter = getFilter(state).toLowerCase();
    const filterContacts = getContacts(state).filter(({ name }) =>
        name.toLowerCase().includes(lowerCaseFilter),
    );
    return filterContacts;
};
