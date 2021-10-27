import React, { useContext } from 'react'
import { FormContext,FormConsumer } from '../../FormContext';
const Select = ( {field_type,
    field_label,
    field_placeholder,
    field_value,
    field_property,
    field_required,
    field_reset,
    field_isSingle,
    field_options}) => {
    //const { handleChange } = useContext(FormContext)
    //console.log(field_options)
     //console.log(field_label)
    return (
        <FormConsumer>
        {
          ({handleChange,handleSubmit,stateCheck,handleClick,checkHiddenClick })=>{
            return( <>
                <label className="form-label">{field_label}</label>
                <select className="form-select" aria-label="Default select example"
                  required={field_required} onChange={event => handleChange(field_label, event)}
                >
                   <option >Open this select menu</option>
                    {field_options ? (field_options.length>0 && field_options.map((option, i) =>
                        <option value={option} key={i}>{option}</option>
    
                    )):null}
                </select>
            </>
            )
          }
       
      }
      </FormConsumer>
        
    )
}

export default Select
