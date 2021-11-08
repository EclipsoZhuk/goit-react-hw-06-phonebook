import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/phoneBook/phonebook-action';
import { getFilter } from '../../redux/phoneBook/phonebook-selector';

export default function Filter() {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <label className={s.text}>
            Find contacts by name
            <input
                placeholder="Search"
                className={s.value}
                type="text"
                value={filter}
                onChange={e => dispatch(changeFilter(e.target.value))}
            />
        </label>
    );
}
