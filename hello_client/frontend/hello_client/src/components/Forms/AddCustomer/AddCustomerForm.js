import React from 'react'
import { Grid} from '@material-ui/core'
import {useForm,Form }from '../../FormControls/useForm'
import Controls from '../../FormControls/Controls'


const genderItems = [
    {id:'male',title:'Male'},
    {id:'female',title:'Female'},
    {id:'other',title:'Other'}
]

const initialCValues = {
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    projectName:'',
    gender:'',
    projectDate: new Date(),
    companyName:''
}
export default function AddCustomerForm() {

    const validate = (fieldValues = values) =>{
        let temp = {...errors}
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName?"":"This field is required."
        if('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email)?"":"Email is not valid."
        if('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length>9?"":"Minimum 10 numbers required."
        if('companyName' in fieldValues)
        temp.companyName = fieldValues.companyName?"":"This field is required."
        if('projectName' in fieldValues)
        temp.projectName = fieldValues.projectName?"":"This field is required."
        setErrors({
            ...temp
        })

        if(fieldValues == values)
        return Object.values(temp).every(x=> x=="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }= useForm(initialCValues,true,validate);
    const handleSubmit = e =>{
        e.preventDefault()
        if(validate()){
            window.alert('testing...')
        }
    }

    return (
        
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input 
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error = {errors.fullName}
                    />
                    <Controls.Input 
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error = {errors.email}
                    />
                    <Controls.Input 
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error = {errors.mobile}
                    />
                    <Controls.Input 
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                    
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input 
                        label="Company Name"
                        name="companyName"
                        value={values.companyName}
                        onChange={handleInputChange}
                        error = {errors.companyName}
                    />
                    <Controls.Input 
                        label="Project Name"
                        name="projectName"
                        value={values.projectName}
                        onChange={handleInputChange}
                        error = {errors.projectName}
                    />

                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                     />
                     {/*<Controls.Select 
                        name="companyName"
                        label="Company name"
                        value={values.companyName}
                        onChange={handleInputChange}
                        options={}
                     /> */}
                     <Controls.DatePicker 
                        name="projectDate"
                        label="Project Date"
                        value={values.startDate}
                        onChange={handleInputChange}
                     />

                    <div>
                        <Controls.Button
                            type="submit" 
                            text="Submit"
                        />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm}
                        />
                    </div>
                    
                </Grid>
            </Grid>
        </Form>
            
        
    )
}
