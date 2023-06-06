import React, {useState} from "react";

const AddBountyForm = (props) =>{

    const initForm = {
        firstName: '',
        lastName: '',
        eliminated: false,
        bountyAmount: '',
        type: '',
    }
    const [formData, setFormData] = useState(initForm)

    const handleChange = (e) =>{
        const {name, value, checked, type} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        props.addBounty(formData)
        setFormData(initForm)
    }

    return(
        <form className="addBountyForm" onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input 
                type="number" 
                name="bountyAmount"
                value={formData.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />
            <span className="checkbox">
                <label>Eliminated?</label>
                <input 
                    className="check"
                    type="checkbox" 
                    name="eliminated"
                    id='eliminated'
                    checked={formData.eliminated}
                    onChange={handleChange}
                />
            </span>
             
            <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
            >
                <option value="">-Type-</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>
            </select>
            <button className="addBtn">Enter</button>
        </form>
    )
}

export default AddBountyForm