import formJSON from './package2.json';
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormProvider } from './FormContext';
import { Component } from 'react';
// import NodeDragTry from './components/NodeDragTry';

//console.log((formJSON))



 /* ////Extracting AWS Data
  var { data_labels,augmentation,dropdown,training_params}=AWS??{}
  const AWS_data_labels=data_labels;
  const AWS_augmentation=augmentation;
  const AWS_dropdown=dropdown;
  const AWS_training_params=training_params;
  var {instance_type,optimizer}=dropdown??{}
  const AWS_instance_type=instance_type;
  const AWS_optimizer=optimizer;
  console.log(instance_type);
  console.log(optimizer)

    //Extracting GCP Data

  const GCP_data_labels=GCP.data_labels;
  const GCP_augmentation=GCP.augmentation;
  const GCP_dropdown=GCP.dropdown;
  const GCP_training_params=GCP.training_params;
  
  

  
  //console.log(data_labels)
  //console.log(dropdown.optimizer)
  //const{innerControls}=training_params[0]??{}
  //console.log(elements)
  //console.log(AWS)*/
const App= ()=>{
 
   //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    
  
  /*state={
    state_AWS_augmentation:false,
    state_AWS_training_params:false,
    state_GCP:false,
    state_GCP_augmentation:false,
    state_GCP_training_params:false
  }
 const [elements, setElements] = useState(null);
 const [state_AWS_augmentation,setState_AWS_augmentation]=useState('false')
 const [state_AWS_training_params,setState_AWS_training_params]=useState('false')
 const [state_GCP,setState_GCP]=useState('false')
 const [state_GCP_augmentation,setState_GCP_augmentation]=useState('false')
 const [state_GCP_training_params,setState_GCP_training_params]=useState('false')
 var key="false"
  useEffect(() => {
    setElements(formJSON)
    
  }, [])
  /*const { AWS,GCP } = elements ?? {}
  const { data_labels,augmentation,dropdown,training_params}=AWS??{}
  const {instance_type,optimizer}=dropdown??{}
  console.log(instance_type);
  console.log(optimizer)
  
  console.log(data_labels)
  //console.log(dropdown.optimizer)
  //const{innerControls}=training_params[0]??{}
  //console.log(elements)
  console.log(AWS)
  //console.log(augmentation)
  //console.log(innerControls)
  console.log(training_params)
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(elements)
  }
 
  //console.log(AWS)*/
  const [stateCheck,setStateCheck]=useState(null)
  const [state,setState]=useState(null);
  const [clickState,setClickState]= useState(false);
  const [changeState,setChangeState]=useState({ });
 
  const handleClick=(labeldata,event)=>{
    
      changeState[labeldata]=event.target.checked
    
    console.log(changeState)
       
   } 

  
  const newElements = formJSON
  const handleChange = (labeldata, event) => {
    
    changeState[labeldata]=event.target.value
    
    
    console.log(changeState)
    
   
    //console.log(labeldata)
    // for(var i=0;i<newElements.length;i++)
    // {
      
    //   Object.values(newElements[i]).forEach((element)=>{
    //     //console.log(element);
    //     Object.values(element).forEach((subElement)=>{
    //       if(subElement!==undefined){
    //     //console.log("I am here")
    //          Object.values(subElement).map((elefield) => {  
    //            Object.values(elefield).map((field)=>{
    //             ///console.log("looped")
    //            // console.log(field.label)
    //             //console.log(labeldata)
                 
                
    //               // console.log(field.innerControls)
    //               if(field.innerControls===undefined){
    //                 //console.log("Hello")
    //                 if(labeldata===field.label)
    //                 {
    //               switch (field.type) {
    //                 case 'checkbox':
    //                   field.value= event.target.checked;
    //                   break;
    //                   case 'hiddenControl':
    //                     Object.values(field.innerControls).forEach((subfield, i)=>{
    //                       switch (subfield.type){
    //                         case 'checkbox':
    //                           subfield.value=event.target.checked;
    //                           break;
    //                         default:
    //                           subfield.value=event.target.value;
    //                       }
    //                     })
    //                 default:
    //                   field.value = event.target.value;
    //                  // console.log(event.target.value)
    //                   break;
    //               }
    //             }
    //               }
    //               else{
    //                 Object.values(field.innerControls).forEach((subfield, i)=>{
    //                   if(labeldata===subfield.label)
    //                   switch (subfield.type){
    //                     case 'checkbox':
    //                       subfield.value=event.target.checked;
    //                       break;
    //                     default:
    //                       subfield.value=event.target.value;
    //                   }
    //                 })
    //               }
                 
    //            })})
    //       }

          
    //     })
    //   })
    //  // console.log(newElements);
    // }
   
  }
  useEffect(() => {
    setState(changeState);
    console.log(state)
    
      },[clickState])

  const handleSubmit = (event) => {
    setClickState(!clickState);
    var result=[];var i=0;
    event.preventDefault();

     setState(changeState)
    
    // console.log(state)


    // var result2=[];
    // result2=changeState;
    // // console.log(result2)
    // Object.values(newElements[i]).forEach((element)=>{
    //   //console.log(element);
    //   Object.values(element).forEach((subElement)=>{
    //     if(subElement!==undefined){
    //   //console.log("I am here")
    //        Object.values(subElement).map((field) => {  
    //          Object.values(field).map((field)=>{
    //            if(field.innerControls===undefined){
    //            if(field.type==='hiddenControl'){
    //             Object.values(field.innerControls).forEach((subfield, i)=>{
    //               if(subfield.value!==undefined){
    //                 result[subfield.label]=subfield.value
    //               }
    //             })
    //            }
    //           ///console.log("looped")
    //          // console.log(field.label)
    //           //console.log(labeldata)
    //           if(field.value!==undefined)
    //           result[field.label]=field.value
    //          }
    //          else{
    //           Object.values(field.innerControls).forEach((subfield, i)=>{
    //             if(subfield.value!==undefined){
    //               result[subfield.label]=subfield.value
    //             }
    //           })
    //          }
    //         })})
    //     }

        
    //   })
    // })

    
    // console.log(result)
    //console.log(result);
    /*event.preventDefault();
    console.log(changeState);
    var index=Object.keys(changeState);
    var values=Object.values(changeState);
    console.log(index);
    console.log(values);
    for(var i=0;i<index.length;i++){
      console.log(i)
      console.log(index[i])
      console.log()
      console.log(state)
       setState([...state,{
         id:index[i],
         value:values[i],
       }])
    }
    console.log("I am state")
   
    //console.log(state)
    //const finalResult=JSON.stringify(state)
   // console.log(finalResult)*/
  }

  // console.log(state)

   const checkHiddenClick=(event)=>{
     if (event.target.checked){
        setStateCheck(true);
     }
     else{
      setStateCheck(false);
            //console.log(stateCheck)
     }
        //console.log(event.target.value)
    }
   
    
  
  
   
  return (
    <FormProvider value={{handleChange:handleChange,handleSubmit:handleSubmit,stateCheck:stateCheck,checkHiddenClick:checkHiddenClick,handleClick:handleClick}}>
     <div className="App container">

     
       
        <form>
           {
             
             (()=>{
               var formElements=[],keyOfList=0;
              for(var count=0;count<formJSON.length;count++)
              {
                Object.values(formJSON[count]).forEach((element)=>{
                  //console.log(element);
                  Object.values(element).forEach((subElement)=>{
                    if(subElement!==undefined){
                  //console.log("I am here")
                       Object.values(subElement).map((subfield) => {  
                         Object.values(subfield).map((field)=>{/*console.log(field) ;console.log("I am here");*/
                         keyOfList++;  formElements.push(<Element key={count+keyOfList} field={field} />)})})
                    }

                    //console.log(subElement);
                  })
                })
                
              }
              return formElements;
             })()
             
           }
           {}        </form>

      </div>
    </FormProvider>
  );
          }
  


export default App;











/* const data_labels={};
  console.log(elements)
  const { AWS, GCP } = elements ?? {}
  if(AWS!==undefined){
  const { ,augmentation,dropdown,training_params}=AWS;
  console.log(data_labels[0]);
  console.log(Object.values(data_labels)[0])
  console.log(augmentation);
  console.log(dropdown);
  console.log(training_params);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(elements)
  }
  /*const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.AWS.forEach(field => {
      const { label, type,property, required,reset,placeholder,value} = field;
      if (id === label) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;

          default:
            field['field_value'] = event.target.value;
            break;
        }


      }
      setElements(newElements)
    });
    console.log(elements)
  }*/ 


  /* elements ? elements.map((element, i) => {
             console.log(element)
            element ? element.map((index, j) =>
               index ? index.map((field, k) => 
               <Element key={k} field={field} />) : null
              
              ) : null
           }) : null}
          {/*AWS_data_labels ? AWS_data_labels.map((field, i) => <Element key={i} field={field} options={AWS_dropdown}/>) : null}
           {/*{state_AWS_augmentation ? AWS_augmentation.map((field, i) => <Element key={i} field={field} options={AWS_dropdown} />) : null}
          
          {AWS_training_params ? AWS_training_params.map((field, i) => <Element key={i} field={field} options={AWS_dropdown}   />) : null}


          {/*{GCP_data_labels ? GCP_data_labels.map((field, i) => <Element key={i} field={field} options={GCP_dropdown}/>) : null}
          {GCP_augmentation ? GCP_augmentation.map((field, i) => <Element key={i} field={field} options={GCP_dropdown} />) : null}
          {GCP_training_params ? GCP_training_params.map((field, i) => <Element key={i} field={field} options={GCP_dropdown}   />) : null}
          {/*innerControls ? innerControls.map((field, i) => <Element key={i} field={field} />) : null}
          {/*<button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>*/