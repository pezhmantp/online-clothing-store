import styled from "@emotion/styled";
import { TextField } from "@mui/material";
interface myprop{
  width?:string,
  height?:string,
  fontFamily?:string,
  fontSize?:string,
  textAlign?:string,
  textColor?:string,
}

const TextFieldStyle = styled(TextField)((props:myprop) => ({

width: props.width ?? "initial",
backgroundColor:"white",
"& .MuiInputBase-input":{
  // height:"0.5375em",
  // paddingBottom:"10px"
},
// "& .MuiInputLabel-root":{
//           marginTop:"-10px",
          
         
//         },
// "& .Mui-focused":{
//           marginTop:"10px",
//         }
}));

export default TextFieldStyle;