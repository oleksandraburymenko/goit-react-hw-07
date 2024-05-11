import { useDispatch, useSelector } from "react-redux";
import { selectValueFilters, setFilter } from "../../redux/filtersSlice.js";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectValueFilters);

  const handleChange = (e) => dispatch(setFilter(e.target.value))

  return (
    <>
      <p className={css.search}>Find contacts by name</p>
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        className={css.input}
      ></input>
    </>
  );
}