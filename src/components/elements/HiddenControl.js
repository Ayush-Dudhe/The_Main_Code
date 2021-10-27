import React, { useContext } from 'react'
import { FormContext,FormConsumer } from '../../FormContext';
const HiddenControl = ({ field_readonly, field_label, field_value }) => {
    //const { handleChange } = useContext(FormContext)
    
    return (
        <FormConsumer>
        {
          ({ handleChange,handleSubmit,stateCheck,handleClick,checkHiddenClick })=>{
            return ( <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={field_value}
               // onChange={event => handleChange(field_id, event)}
                 onChange={event=> checkHiddenClick(event)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">{field_label}</label>
        </div>
            )
          }
       
      }
      </FormConsumer>
    )
       
    
}

export default HiddenControl
