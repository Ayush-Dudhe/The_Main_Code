import React, { useContext } from 'react'
import { FormContext,FormConsumer } from '../../FormContext';
const Checkbox = ({ field_readonly, field_label, field_value,field_required }) => {
    //const { handleChange } = useContext(FormContext)
    
    return (
        <FormConsumer>
        {
          ({handleChange,handleSubmit,stateCheck,handleClick,checkHiddenClick })=>{
            return ( <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={field_value}
                onChange={event => handleClick(field_label, event)}
                //onChange={event=>handleClick(field_label,event)}
                 
            />
            <label className="form-check-label" htmlFor="exampleCheck1">{field_label}</label>
        </div>
            )
          }
       
      }
      </FormConsumer>
    )
       
    
}

export default Checkbox
