import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Employees()
{   
    const [employeeId,setEmployeeId]=useState('')
    const [employeeName,setEmployeeName]=useState('')
    const [employeeSalary,setEmployeeSalary]=useState('')
    const [employeeImage,setEmployeeImage]=useState('')
    var dispatch = useDispatch()
    var navigate = useNavigate()

    const changeImage=(e)=>{
        setEmployeeImage(URL.createObjectURL(e.target.files[0]))
    }

    const handleClick=()=>{
        var body = {employeeid:employeeId,employeename:employeeName,employeesalary:employeeSalary,employeeimage:employeeImage}
        var result=dispatch({type:'ADD_EMPLOYEE',payload:[employeeId,body]})
        
    }

    const handleDisplay=()=>{
        navigate('/displayemployees')
    }

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
            <div style={{width:500,height:300,padding:20}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField onChange={(e)=>setEmployeeId(e.target.value)} label="Employee Id" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={(e)=>setEmployeeName(e.target.value)} label="Employee Name" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={(e)=>setEmployeeSalary(e.target.value)} label="Employee Salary" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button component="label" fullWidth variant="contained">
                            <input onChange={(e)=>changeImage(e)} hidden type="file" accept="image/*" multiple/>
                            Upload Image
                        </Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Button onClick={handleClick} variant="outlined" fullWidth>Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleDisplay} variant="outlined" fullWidth>Display</Button>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}