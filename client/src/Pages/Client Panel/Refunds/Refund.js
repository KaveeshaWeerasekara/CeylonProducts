import React from 'react'
//import {Box} from '@mui/material/Box';
//import { DataGridPro } from '@mui/x-data-grid-pro';
 //import { useDemoData } from '@mui/x-data-grid-generator';
 import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
 import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { InputLabel,TextField,Box} from '@mui/material'
import  { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import '../../../sass/Refund/Refund.css';
import Tooltip from "@material-ui/core/Tooltip";
//import RefundForm from './RefundForm';



const labelStyles={ 
    marginBottom:2,
    marginTop:2,
    fontSize:'18px', 
    // fontWeight:'bold',
   
  };
  
//  const columns:GridColDef[] =
 const columns= [
    { 
        field: 'itemNo.', 
        headerName: 'Item Number', 
        width: 100
    },
    { 
        field: 'productName', 
        headerName: 'Product Name', 
        width: 300 
    },
    { 
        field: 'total', 
        headerName: 'Total Amount', 
        width: 150 
    },
    {
      field: 'qty',
      headerName: 'Qty',
      type: 'number',
      width: 90,
    },
    {
        field: 'sellerId',
        headerName: 'Seller Id',
        //type: 'number',
        width: 90,
      },
    {
      field: 'sellerName',
      headerName: 'Seller name',
      //description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 250,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
 
 
 
 const rows = [
    { id: 1, productName: 'Spices', total: 1000, qty: 35,sellerId:'001A',sellerName:'Kaveesha' },
    { id: 2, productName: 'Bathik', total: 2000, qty: 35,sellerId:'002A',sellerName:'Tharuka' },
    { id: 3, productName: 'Clay', total: 5000, qty: 35,sellerId:'003A',sellerName:'Imasha' },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


export default function Refund() {


                const [count, setCount] = useState(0);
                const IncNum = () => {
                setCount(count + 1);
                };
                const DecNum = () => {
                if (count > 0) setCount(count - 1);
                else {
                    setCount(0);
                    alert("min limit reached");
                }
                };


//   return (
    // <div>

  
    //     <h2>Request Return for "paymentId"</h2>
    //     <p>please select order lines to return</p>
    //                     <div style={{ height: 400, width: '100%' }}>
    //                     <DataGrid
    //                         rows={rows}
    //                         columns={columns}
    //                         // pageSize={3}
    //                         // rowsPerPageOptions={[5]}
    //                         checkboxSelection
    //                     />
    //                     </div>

    //         <form>
    //                 <Box 
    //                     //border={3} 
    //                     borderColor="gray" 
    //                     borderRadius={3} 
    //                     boxShadow="10px 10px 20px #ccc" 
    //                     padding={3} 
    //                     margin='auto' 
    //                     marginTop={5}
    //                     display='flex'
    //                     flexDirection={'column'}
    //                     width={"80%"}
    //                 >
                
    //                     <h2>Products to return</h2>
    //                     <hr/>
    //                     <InputLabel 
    //                     sx={labelStyles}
    //                     >
    //                         Quantity
    //                     </InputLabel>
                        
                        
                    
    //             {/* return ( */}
    //             {/* <div className="main_div"> */}
    //                     <div className="center_div">
                        
    //                     <div className="btn_div">
    //                         <Tooltip title="Delete">
    //                         <Button onClick={IncNum}>
    //                             <AddIcon />
    //                         </Button>
    //                         </Tooltip>
    //                         <h5>{count}</h5>
    //                         <Button onClick={DecNum}>
    //                         <RemoveIcon />
    //                         </Button>
    //                     </div>
    //                     </div>
    //                 {/* </div> */}
    //             {/* ) */}
    //             <InputLabel sx={labelStyles}>
    //                         Description
    //                     </InputLabel>
    //                     <TextField
    //                     id="filled-multiline-static"
    //                     //   onChange={handleChange} 
    //                     //   value={inputs.description} 
    //                     multiline
    //                     rows={10}
    //                     columns={100}
    //                     width={80}
    //                     color='warning'
    //                     //defaultValue="Default Value"
    //                     variant="filled"
    //                     />
    //                     <Box/>
    //         </form>
  
    //     </div>

  
//   )

return(
    <div>
        <h2>Request Return for "paymentId"</h2>
         <p>please select order lines to return</p>
                        <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            // pageSize={3}
                            // rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                        </div>

<form 
//onSubmit={handleSubmit}
>
        <Box 
        //border={3} 
        borderColor="gray" 
        borderRadius={3} 
        boxShadow="10px 10px 20px #ccc" 
        padding={3} 
        margin='auto' 
        marginTop={5}
        display='flex'
        flexDirection={'column'}
        width={"80%"}
        >
          

                     <h2>Products to return</h2>
                        <hr/>
                        <InputLabel 
                        sx={labelStyles}
                        >
                         Quantity
                        </InputLabel>
                                        <div className="center_div2">
                                        <div className="btn_div3">
                                            <Tooltip title="Delete">
                                            <Button onClick={IncNum}>
                                                <AddIcon />
                                            </Button>
                                            </Tooltip>
                                            <h5>{count}</h5>
                                            <Button onClick={DecNum}>
                                            <RemoveIcon />
                                            </Button>
                                        </div>
                                        </div>
          
          <InputLabel sx={labelStyles}>
            Comment
          </InputLabel>


          <TextField
          id="filled-multiline-static"
          //onChange={handleChange} 
          //value={inputs.description} 
          multiline
          rows={10}
       
          color='warning'
          //defaultValue="Default Value"
          variant="filled"
        />


          <InputLabel sx={labelStyles}>
            File Attachment
          </InputLabel>
       

          <TextField
            name="upload-photo"
            type="file"
            variant="standard" 
            color='warning'
          />
        <br/>
          <Button sx={{marginTop:2, borderRadius:2}} variant="contained" color="blue"  type='submit'>Submit</Button>


        </Box>
      </form>
       
     </div>
)

}


