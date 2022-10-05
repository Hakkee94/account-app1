import {createSlice} from "@reduxjs/toolkit";

export interface IContact {
    id?: number
    name: string
    phone: string
    gender: string
    email: string
}

interface IContactState {
    list: IContact[]
    filteredList: IContact[]
    isLoading: boolean
    activeContact: number | null
}

const initialState: IContactState = {
    list: [],
    filteredList: [],
    isLoading: false,
    activeContact: null
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        create(state, actions) {
            state.list = [...state.list, {id: state.list.length + 1, ...actions.payload}]
        },
        update(state, actions) {
            state.list = state.list.map(contact => {
                if(contact.id === state.activeContact) {
                    return actions.payload
                }
                return contact
            })
            state.activeContact = null
        },
        setContactForEdit(state, actions) {
            state.activeContact = actions.payload
        },
        remove(state, actions) {
            state.list = state.list.filter(f => f.id !== actions.payload)
        },
        search(state, actions) {
            state.filteredList = state.list.filter(f => Object.values(f).find(item => String(item).includes(actions.payload)))
        }
    }
})

export const {create, update, setContactForEdit, remove, search} = contactsSlice.actions

export default contactsSlice.reducer