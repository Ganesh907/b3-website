import React, { createContext, useState, useContext } from 'react';
const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        images: [],
        imagePosition: 'left',
        imagesize: 'medium',
    });

    const updateFormData = (newData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData,
        }));
        console.log(newData)
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    return useContext(FormContext);
};
