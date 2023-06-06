import React, { useState } from "react";


const Bounties = (props) =>{

    const [editToggle, setEditToggle] = useState(false)
    const initForm = {
        firstName: props.firstName,
        lastName: props.lastName,
        eliminated: props.eliminated,
        bountyAmount: props.bountyAmount,
        type: props.type,
    }
    const [formData, setFormData] = useState(initForm)

    const toggle = () =>{
        setEditToggle(prevState => !prevState)
    }

    const handleChange = (e) =>{
        const {name, value, checked, type} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        props.editBounty(formData, props._id)
        toggle()
    }

    return(
        <div className="bounties">
            {!editToggle ? <>
                <h1>{props.firstName} {props.lastName}</h1>
                <p>Type: {props.type}</p>
                <p>Bounty Amount: <span style={{color: 'green'}}>{props.bountyAmount}</span> rc</p>
                <h4>Eliminated: {props.eliminated ? <span style={{color: 'red', textShadow: '1px 1px black'}}>True</span> : <span>False</span>}</h4>
                <button onClick={()=> props.deleteBounty(props._id)} className="deleteBtn">Delete</button>
                <button onClick={toggle} className="editBtn">Edit</button>
            </>
            :
            <>
                <button onClick={toggle} className="editBtn" >Cancel</button>
                <form onSubmit={handleSubmit} className="editForm">
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
                
                </>
            }
        </div>
    )
}

export default Bounties