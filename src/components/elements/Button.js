import React, { useContext, useState } from 'react'
import { FormContext, FormProvider,FormConsumer } from '../../FormContext';

const Button = ({ field_label,field_type}) => {
   // const { handleChange } = useContext(FormContext)
  // const [{state1},setSate]=useState(null);

  
    return (
      <FormConsumer>
        {
          ({handleChange,handleSubmit,stateCheck,handleClick,checkHiddenClick })=>{
            return( <div className="mb-3">
            <button type={field_type} className="btn btn-primary" onClick={(event) =>{handleSubmit(event)}}>{field_label}</button>
           {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
           </div>
            )
          }
       
      }
      </FormConsumer>
    )
}

export default Button
