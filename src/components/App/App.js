import { useEffect } from 'react';
import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { connect } from 'react-redux';
import { AddContact } from '../../redux/phoneBook/phonebook-action';

function App({ contacts, formSubmitHandler }) {
    // const [contacts, setContacts] = useState(() => {
    //     return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
    // });
    // const [filter, setFilter] = useState('');

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    // const getVisibleContact = () => {
    //     return contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(filter.toLowerCase()),
    //     );
    // };

    // const changeFilter = e => setFilter(e.target.value);

    // const onDeleteContact = idContact => {
    //     setContacts(contacts.filter(({ id }) => id !== idContact));
    // };

    return (
        <Container>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm onSubmitData={formSubmitHandler} />
            <h2 className={s.contactTitle}>Contacts</h2>
            <Filter />
            <ContactList />
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        contacts: state.phonebook.contactsReducer,
        // filter: state.phonebook.filterReducer,
    };
};

const mapDispatchToProps = dispatch => ({
    formSubmitHandler: (name, number) => dispatch(AddContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
