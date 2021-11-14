import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { phonebookAction, phonebookSelector } from '../../redux/phoneBook';

export default function ContactList() {
    const contacts = useSelector(phonebookSelector.getFilterContacts);
    const dispatch = useDispatch();

    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id}>
                    <span className={s.text}>{`${name}: ${number}`}</span>
                    <button
                        className={s.buttonDelete}
                        type="button"
                        onClick={() =>
                            dispatch(phonebookAction.deleteContact(id))
                        }
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
