import { useNavigate } from "react-router-dom"
import MaterialTable from "@material-table/core"
import { useSelector } from "react-redux"
import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function DisplayEmployees()
{
    var navigate = useNavigate()
    var employess = useSelector(state=>state.employeeData)
    var employeeData = Object.values(employess)
    const [employeeId,setEmployeeId]=useState('')
    const [employeeName,setEmployeeName]=useState('')
    const [employeeSalary,setEmployeeSalary]=useState('')
    const [employeeImage,setEmployeeImage]=useState('')
    var dispatch = useDispatch()
    var navigate = useNavigate()

    const handleEdit=()=>{
      var body = {employeeid:employeeId,employeename:employeeName,employeesalary:employeeSalary,employeeimage:employeeImage}
      var result = dispatch({type:"EDIT_EMPLOYEE",payload:[employeeId,body]})
    }

    const handleDelete=()=>{
      var result = dispatch({type:'DELETE_EMPLOYEE',payload:[employeeId]})
    }

    const handleOpenEdit=(rowData)=>{
      setOpen(true)
      setEmployeeId(rowData.employeeid)
      setEmployeeName(rowData.employeename)
      setEmployeeSalary(rowData.employeesalary)
      setEmployeeImage(rowData.employeeimage)
    }

    const [open, setOpen] = useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const changeImage=(e)=>{
        setEmployeeImage(URL.createObjectURL(e.target.files[0]))
    }

    
      const handleClose = () => {
        setOpen(false);
      };
    

    const showEmployeeDialog=()=>{
      return (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Edit Interface of Employee Detail"}
            </DialogTitle>
            <DialogContent>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <div style={{width:500,height:300,padding:20}}>
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                          <TextField value={employeeId} onChange={(e)=>setEmployeeId(e.target.value)} label="Employee Id" fullWidth/>
                      </Grid>
                      <Grid item xs={12}>
                          <TextField value={employeeName} onChange={(e)=>setEmployeeName(e.target.value)} label="Employee Name" fullWidth/>
                      </Grid>
                      <Grid item xs={12}>
                          <TextField value={employeeSalary} onChange={(e)=>setEmployeeSalary(e.target.value)} label="Employee Salary" fullWidth/>
                      </Grid>
                      <Grid item xs={12}>
                          <Button component="label" fullWidth variant="contained">
                              <input onChange={(e)=>changeImage(e)} hidden type="file" accept="image/*" multiple/>
                              Upload Image
                          </Button>
                      </Grid>

                      <Grid item xs={6}>
                          <Button onClick={handleEdit} variant="outlined" fullWidth>Edit</Button>
                      </Grid>
                      <Grid item xs={6}>
                          <Button onClick={handleDelete} variant="outlined" fullWidth>Delete</Button>
                      </Grid>

                  </Grid>
              </div>
          </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }




    function showEmployees() {
        return (
          <MaterialTable
            title="Employee Details"
            columns={[
              { title: 'Employee Id', field: 'employeeid' },
              { title: 'Employee Name', field: 'employeename' },
              { title: 'Employee Salary', field: 'employeesalary' },
              { title: 'Employee Image', render: (rowData)=> <div><img src={rowData.employeeimage} width={40}/></div> },

              
            ]}
            data={employeeData}        
            actions={[
              {
                icon: 'add',
                isFreeAction: true,
                tooltip: 'Add Employee',
                onClick: (event, rowData) => navigate('/employees')
              },
              {
                icon: 'edit',
                tooltip: 'Edit Employee',
                onClick: (event, rowData) => handleOpenEdit(rowData)
              },

            ]}
          />
        )
      }

    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
            <div style={{width:700,height:400,padding:20}}>
                {showEmployees()}
           </div>
           {showEmployeeDialog()}
        </div>
    )
}