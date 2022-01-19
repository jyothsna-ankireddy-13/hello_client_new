import { FormControl, FormControlLabel,RadioGroup as MuiRadioGroup ,FormLabel, Radio } from '@material-ui/core'
import React from 'react'

export default function RadioGroup(props) {

    const {name,value,label,onChange,items} = props
    return (
        <FormControl>
                        <FormLabel>{label}</FormLabel>
                        <MuiRadioGroup row
                            name={name}
                            value={value}
                            onChange={onChange}>
                                {
                                    items.map(
                                        (item,index)=>(
                                            <FormControlLabel   value={item.id} control={<Radio/>} label={item.title} />
                                        )
                                    )
                                }
                            
                            
                        </MuiRadioGroup>
                    </FormControl>
    )
}
