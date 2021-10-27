import React from 'react';
import { createContext } from 'react';


const FormContext = createContext(null);

const FormProvider = FormContext.Provider
const FormConsumer = FormContext.Consumer

export {FormProvider, FormConsumer,FormContext}
