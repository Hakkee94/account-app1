import {useAppDispatch, useAppSelector} from "../../app/hooks";
import React from "react";
import {IContact, remove, create, setContactForEdit, update} from './contactsSlice'
import Form from './Form'
import Modal from '../../components/modal'
import Search from './Search'
import './Contacts.css'
import ContactItem from "./ContactItem";

const Contacts = () => {
    const dispatch = useAppDispatch()
    const contactList: IContact[] = useAppSelector(state => state.contacts.filteredList.length ? state.contacts.filteredList : state.contacts.list)
    const activeContactId: number | null = useAppSelector(state => state.contacts.activeContact)

    const activeContact: IContact = useAppSelector(state => {
        if (state.contacts.activeContact) {
            return state.contacts.list[state.contacts.activeContact - 1]
        } else {
            return {name: '', phone: '', gender: '', email: ''}
        }
    })

    const handleCloseModal = () => {
        dispatch(setContactForEdit(null))
    }

    return (
        <div>
            <Search/>
            {contactList.map(contact => <ContactItem contact={contact} key={contact.id}/>)}
            {activeContactId && <Modal onClose={handleCloseModal}>
              <Form
                defaultValues={activeContact}
                onSubmit={(contact) => dispatch(update(contact))}
              />
            </Modal>}
            <section>
                <h3 style={{display: 'flex', justifyContent: 'center'}}>Add new Contact</h3>
                <Form onSubmit={(contact) => dispatch(create(contact))}/>
            </section>
        </div>
    );
};

export default Contacts;