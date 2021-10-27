import React, { useContext } from 'react'
import { FormContext, FormProvider,FormConsumer } from '../../FormContext';

const Input = ({ field_label, field_placeholder, field_value,field_type,field_required,field_reset,field_property}) => {
    //const { handleChange } = useContext(FormContext)
    return (
        <FormConsumer>
        {
          ({handleChange,handleSubmit,stateCheck,handleClick,checkHiddenClick })=>{
            return( <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
            <input type={field_type}  className="form-control" 
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
                required={field_required}
               onChange={event => handleChange(field_label, event)}
            />
            {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
            </div>
            )
          }
       
      }
      </FormConsumer>
        
    )
}

export default Input
