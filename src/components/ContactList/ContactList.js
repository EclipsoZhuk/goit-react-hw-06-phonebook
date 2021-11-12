import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from '../../redux/phoneBook/phonebook-selector';
import { deleteContact } from '../../redux/phoneBook/phonebook-action';

export default function ContactList() {
    const contacts = useSelector(getFilterContacts);
    const dispatch = useDispatch();

    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <span className={s.text}>{`${name}: ${number}`}</span>
                    <button
                        className={s.buttonDelete}
                        type="button"
                        onClick={() => dispatch(deleteContact(id))}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
