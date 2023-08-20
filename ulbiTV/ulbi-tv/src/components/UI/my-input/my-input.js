import classes from './my-input.module.css'
import React from 'react'

const MyInput = React.forwardRef( (props, ref) => {
    return (
        <input ref={ref} className={classes.MyInput} {...props}>

        </input>
    )
})

export default MyInput