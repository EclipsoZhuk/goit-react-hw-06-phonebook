export const getContacts = state => state.contacts.contactsReducer;
export const getFilter = state => state.contacts.filterReducer;

export const getFilterContacts = state => {
    const lowerCaseFilter = getFilter(state).toLowerCase();
    const filterContacts = getContacts(state).filter(({ name }) =>
        name.toLowerCase().includes(lowerCaseFilter),
    );
    return filterContacts;
};
