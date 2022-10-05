import React, {useState, ChangeEvent, useEffect} from "react";
import {IContact} from './contactsSlice'

const emptyFormData = {name: '', phone: '', gender: '', email: ''}

const Form = ({onSubmit, defaultValues}: {onSubmit: (formData: IContact) => void, defaultValues?: IContact}) => {
    const [formData, setFormData] = useState<IContact>(defaultValues ? defaultValues : emptyFormData)

    const handleChange = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev: IContact) => ({...prev, [field]: e.target.value}))

    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        onSubmit(formData)
        console.log(defaultValues)
        defaultValues ? setFormData(defaultValues) : setFormData(emptyFormData)
    }

    // useEffect(() => {
    //     defaultValues && setFormData(defaultValues)
    // }, [])

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input name="name" placeholder="name" value={formData.name} onChange={handleChange('name')}/>
            </label>
            <label>
                <input name="phone" placeholder="phone" value={formData.phone} onChange={handleChange("phone")}/>
            </label>
            <label>
                <input name="gender" placeholder="gender" value={formData.gender} onChange={handleChange("gender")}/>
            </label>
            <label>
                <input name="email" placeholder="email" value={formData.email} onChange={handleChange("email")}/>
            </label>
            <button type="submit"> Send </button>
        </form>
    );
};

export default Form;