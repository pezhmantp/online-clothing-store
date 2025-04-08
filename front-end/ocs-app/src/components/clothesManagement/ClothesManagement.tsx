import { useLazyQuery} from '@apollo/client';
import React, { useEffect} from 'react'
import { GetAllClothesDocument } from '../../gql/graphql';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import useDeleteClothes from '../../services/useDeleteClothes';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from 'react-oidc-context';
import secureLocalStorage from 'react-secure-storage';



function ClothesManagement() {

  const deleteClothes=useDeleteClothes();
  
  const [fetchAllClothes,{ loading, data }] = useLazyQuery(GetAllClothesDocument,{
    context: { headers: { authorization: `Bearer ${secureLocalStorage.getItem("access_token")}` } }
});
  useEffect(()=>{
    fetchAllClothes();
  },[])
  

  async function handleDelete(e:any){
    var answer = window.confirm("Are you sure?");
    if (answer) {
      const isDeleted= await deleteClothes.deleteIt(e);
   
      console.log(isDeleted);
      if(isDeleted){
       toast("Clothes deleted successfully");
      }
      else{
       toast("An error occurred");
      }
      fetchAllClothes();
    }
    
   
  }
   

  return (
   <>
   { !(data?.getAllClothes?.length === undefined || data?.getAllClothes?.length === 0) && (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Brand</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Color</TableCell>
            <TableCell align="left">Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.getAllClothes?.map((row:any) => (
            <TableRow
              key={row.price}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                {row.clothes.clothesId}
              </TableCell>
              <TableCell align="left">{row.clothes.clothesType}</TableCell>
              <TableCell align="left">{row.clothes.brand}</TableCell>
              <TableCell align="left">{row.clothes.price}</TableCell>
              <TableCell align="left">{row.clothes.color}</TableCell>
              <TableCell align="left">{row.clothes.gender}</TableCell>
              <TableCell align="left"><Button onClick={()=>handleDelete(row.clothes.clothesId)} sx={{color:"red"}}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )}
  {
    (data?.getAllClothes?.length === undefined || data?.getAllClothes?.length === 0) && (<div style={{margin:"center"}}>No data here!</div>)
  }
  <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
   </>
  
  
  )
}

export default ClothesManagement