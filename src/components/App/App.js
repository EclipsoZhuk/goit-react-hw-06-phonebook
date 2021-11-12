import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';

// import { connect } from 'react-redux';
// import { AddContact } from '../../redux/phoneBook/phonebook-action';

export default function App() {
    return (
        <Container>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={s.contactTitle}>Contacts</h2>
            <Filter />
            <ContactList />
        </Container>
    );
}

// const mapStateToProps = state => {
//     return {
//         contacts: state.phonebook.contactsReducer,
//         // filter: state.phonebook.filterReducer,
//     };
// };

// const mapDispatchToProps = dispatch => ({
//     formSubmitHandler: (name, number) => dispatch(AddContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
