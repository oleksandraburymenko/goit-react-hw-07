import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { ImPhone } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const onDelete = () => {dispatch(deleteContact(id))};

  return (
    <>
      <div>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <ImPhone /> {number}
        </p>
      </div>
      <button className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </>
  );
}