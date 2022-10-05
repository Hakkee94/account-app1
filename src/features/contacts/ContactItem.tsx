import {IContact, remove, setContactForEdit} from "./contactsSlice";
import React from "react";
import {useAppDispatch} from "../../app/hooks";

const ContactItem = ({contact}: {contact: IContact}) => {
    const dispatch = useAppDispatch()

    return (
        <section className="contact-item">
            <div>{contact.name}</div>
            <div>{contact.phone}</div>
            <div>{contact.gender}</div>
            <div>{contact.email}</div>
            <button onClick={() => dispatch(remove(contact.id))} type="button">Remove</button>
            <button type="button" onClick={() => dispatch(setContactForEdit(contact.id))}>Edit</button>
        </section>
    )
}

export default ContactItem