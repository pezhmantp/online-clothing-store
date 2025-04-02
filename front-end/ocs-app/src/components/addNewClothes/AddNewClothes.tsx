import { Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, Step, StepLabel, Stepper, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Grid from '@mui/material/Grid2';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/Store";
import { updateClothesDetails } from "../../redux/slices/ClothesSlice";
import TextFieldStyle from '../styledElements/TextFieldStyle';
import useImageUpload from '../../services/useImageUpload';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {defaultImg} from '../exports';
import './addNewClothes.css';
import useSaveClothes from "../../services/useSaveClothes";
import { toast, ToastContainer } from "react-toastify";

function AddNewClothes() {
    const matches800px=useMediaQuery('(min-width:900px)');
    const matches570px=useMediaQuery('(min-width:570px)');
    const steps = ['Clothes details','Clothes photos'];
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set<number>());
    const clothesDetails=useSelector((state:any) => state.clothes.clothesDetails);
    const imageUploadSelector=useSelector((state:any) => state.uploadImg);
    const ImgElmntAttrSelector:any[]=useSelector((state:any) => state.uploadImg.imgElmntAttr);
    const ImgElmntAttrArray = [...ImgElmntAttrSelector];
    const imageUpload = useImageUpload();
    const saveClothes =useSaveClothes();
    const dispatch=useDispatch<AppDispatch>();
    const isStepSkipped = (step: number) => {
        return skipped.has(step);
      };
      const handleNext = () => {
       // e.preventDefault()
        
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
        
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };
    
      const saveClothesHandler = () =>{
        saveClothes.saveClothesFunc();
        toast("Clothes saved successfully!")
      }
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
      const handleClothesTypeChange = (event: SelectChangeEvent) => {
        var data={
            ...clothesDetails,
            clothesType: event.target.value
        }
        dispatch(updateClothesDetails(data));
      };
      const handleClothesBrandChange = (event: SelectChangeEvent) => {
        var data={
          ...clothesDetails,
          clothesBrand: event.target.value
      }
      dispatch(updateClothesDetails(data));
      };
      const handleClothesPriceChange = (event: SelectChangeEvent) => {
        var data={
          ...clothesDetails,
          clothesPrice: event.target.value
      }
      dispatch(updateClothesDetails(data));
      };
      const handleClothesColorChange = (event: SelectChangeEvent) => {
        var data={
          ...clothesDetails,
          clothesColor: event.target.value
      }
      dispatch(updateClothesDetails(data));
      };
      const handleClothesSizeChange = (event: SelectChangeEvent) => {
        var data={
          ...clothesDetails,
          clothesSize: event.target.value
      }
      dispatch(updateClothesDetails(data));
      };
      const handleClothesGenderChange = (event: SelectChangeEvent) => {
        var data={
          ...clothesDetails,
          clothesGender: event.target.value
      }
      dispatch(updateClothesDetails(data));
      };
      function hideFirstImg(index:any):any {
        if(index === 0)
        {
          return {marginRight:"3px",paddingBottom:"20px",
          marginLeft:"3px",backgroundColor:"ButtonShadow",
          height:"129px", visibility:"hidden",display:"none"}
        }
        
          return {marginRight:"3px",paddingBottom:"20px",marginTop:"5px",
          marginLeft:"3px",backgroundColor:"ButtonShadow",
          height:"129px",borderColor:"blue",border:"solid",borderWidth:"1px", borderRadius:"8px"}
        
      }
    return (
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          backgroundColor: "rgb(237, 237, 237)",
          minHeight: "440px",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            {
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            }
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </>
        ) : (
          <>
           {
            activeStep === 0 && (
            <Grid container spacing={4} marginTop="40px">
              <Grid size={{md:4,sm:6,xs:12}}>
              <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                      sx={{ backgroundColor: "white" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={clothesDetails.clothesType}
                      label="Type"
                      onChange={handleClothesTypeChange}
                    >
                      <MenuItem disabled value="">
                        <em>choose a type</em>
                      </MenuItem>
                      <MenuItem value="jacket">Jacket</MenuItem>
                      <MenuItem value="jeans">Jeans</MenuItem>
                      <MenuItem value="shirt">Shirt</MenuItem>
                      <MenuItem value="dress">Dress</MenuItem>
                      <MenuItem value="coat">Coat</MenuItem>
                    </Select>
              </FormControl>
              </Grid>
              <Grid size={{md:4,sm:6,xs:12}}>
              <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                    <Select
                      sx={{ backgroundColor: "white" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={clothesDetails.clothesBrand}
                      label="Brand"
                      onChange={handleClothesBrandChange}
                    >
                      <MenuItem disabled value="">
                        <em>choose a brand</em>
                      </MenuItem>
                      <MenuItem value="gucci">Gucci</MenuItem>
                      <MenuItem value="lacoste">Lacoste</MenuItem>
                      <MenuItem value="prada">Prada</MenuItem>
                      <MenuItem value="versace">Versace</MenuItem>
                    </Select>
              </FormControl>
              </Grid>
              <Grid size={{md:4,sm:6,xs:12}}>
                  <TextFieldStyle
                    label="Price"
                    width="100%"
                    value={clothesDetails.clothesPrice}
                    onChange={(e: any) => handleClothesPriceChange(e)}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      },
                    }}
                  ></TextFieldStyle>
                </Grid>
                <Grid size={{md:4,sm:6,xs:12}}>
                <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                      sx={{ backgroundColor: "white" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={clothesDetails.clothesColor}
                      label="Color"
                      onChange={handleClothesColorChange}
                    >
                      <MenuItem disabled value="">
                      <em>choose a color</em>
                      </MenuItem>
                      <MenuItem value="blue">Blue</MenuItem>
                      <MenuItem value="brown">Brown</MenuItem>
                      <MenuItem value="black">Black</MenuItem>
                      <MenuItem value="red">Red</MenuItem>
                      <MenuItem value="green">Green</MenuItem>
                      <MenuItem value="yelow">Yelow</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid size={{md:4,sm:6,xs:12}}>
                  <FormControl sx={{ width: "100%" }}>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                      sx={{ backgroundColor: "white" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={clothesDetails.clothesSize}
                      label="Size"
                      onChange={handleClothesSizeChange}
                    >
                      <MenuItem disabled value="">
                        <em>choose a size</em>
                      </MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="6">6</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                      <MenuItem value="10">10</MenuItem>
                      <MenuItem value="12">12</MenuItem>
                      <MenuItem value="14">14</MenuItem>
                      <MenuItem value="16">16</MenuItem>
                      <MenuItem value="18">18</MenuItem>
                      <MenuItem value="20">20</MenuItem>
                      <MenuItem value="22">22</MenuItem>
                      <MenuItem value="24">24</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={4}>
                  <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Gender
                    </FormLabel>

                    <RadioGroup
                      style={{ flexDirection: "row" }}
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Men"
                        control={
                          <Radio
                            name="men"
                            checked={clothesDetails.clothesGender == "Men" ? true : false}
                            onChange={(e: any) => {
                              handleClothesGenderChange(e);
                            }}
                          />
                        }
                        label="Men"
                      />
                      <FormControlLabel
                        value="Women"
                        control={
                          <Radio
                            name="women"
                            checked={clothesDetails.clothesGender == "Women" ? true : false}
                            onChange={(e: any) => {
                              handleClothesGenderChange(e);
                            }}
                          />
                        }
                        label="Women"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid size={{md:4,sm:6,xs:12}}>
                <Button variant="outlined" onClick={() => handleNext()}>
                    Next
                </Button>
                </Grid>
                
            </Grid>
            )}
            {
              activeStep === 1 && (
                <Grid container columnSpacing={2} direction={matches800px ? "row" : "column"} alignItems={!matches800px ? "center" : "initial"} marginTop="20px">
                  <Grid container columnSpacing={2} rowSpacing={2} size={{xs:9,sm:6,md:4,lg:3}} >
                <Grid size={6}>
                
                <Button variant="contained" sx={{width:"100%"}} size="small" component="label">
                Upload
                <input hidden accept="image/*" onChange={(e)=>imageUpload.uploadImage(e)} type="file" />
                </Button>
                
                  
                  
                  </Grid>
                  <Grid size={6}>
                  <Button disabled={imageUploadSelector.disblAprvImgBtn} sx={{width:"100%"}} onClick={imageUpload.approveImage} variant="contained" size="small" component="label" >Save</Button>
                  </Grid>
                  <Grid size={12}>
                    <img src={imageUploadSelector.uploadedImge === "" ? defaultImg : imageUploadSelector.uploadedImge} style={{ width: "100%",height:"250px"}}/>
                  </Grid>
                  
                  {/* sx={{backgroundColor:"white",minHeight:"290px", height:!matches570px ? "700px" :"290px",borderRadius:"10px"}} */}
                </Grid>
                <Grid container spacing={2} size={{xs:11,sm:12,md:8,lg:8}} sx={{justifyContent:"center",padding:matches570px ? "auto" :"20px",flexDirection:matches570px ? "row" :"column",alignItems:"center",backgroundColor:"white"}}>
                {/* <FormControl > */}
                {/* <FormGroup style={{flexDirection:matches570px ? "row" :"column",marginTop:"50px",backgroundColor:"white",width:"500px",minHeight:"250px"}}> */}
                     {
                     ImgElmntAttrArray.map((imgData, index) => {
                      return (
                        
                         <div className="selectedImgsDiv" id={index.toString()} style={hideFirstImg(index)} key={index}>
                         
                         <div>
                         <img style={{width:matches570px ? "160px" : "180px"}} src={imgData.src} />
                         </div>
                         <div>
                         <Button id={imgData.id} onClick={(e:any)=>imageUpload.removeImage(index,e.currentTarget.id)} style={{width:"10px"}} type="button" endIcon={<DeleteForeverIcon />}></Button>
                         </div>
                        </div>
                        
                      );
                      
                    })
                    }
               {/* </FormGroup> */}
              {/* </FormControl> */}
             </Grid>
             <Grid container size={12} rowSpacing={2} justifyContent={"space-between"} marginTop="20px">
                  <Grid >
                  <Button variant='outlined' onClick={() => handleBack()}>Back</Button>
                </Grid>
                <Grid >
                  <Button variant='contained' onClick={saveClothesHandler}>Save this Clothes</Button>
                </Grid>
            </Grid>
            </Grid>
              )
            }
          </>
        )}
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
      </Box>
    );
}
export default AddNewClothes