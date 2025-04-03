import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useEffect, useState } from 'react';
import { hasAuthParams, useAuth } from "react-oidc-context";
import AddNewClothes from '../addNewClothes/AddNewClothes';
import ClothesManagement from '../clothesManagement/ClothesManagement';
import secureLocalStorage from 'react-secure-storage';

function ManagerPanel() {
    const auth = useAuth();
    
    const [hasTriedSignin, setHasTriedSignin] = useState(false);
    const [tabvalue, setTabvalue] = useState("1");
useEffect(() => {
  if (!hasAuthParams() && !auth.isAuthenticated && !auth.activeNavigator && !auth.isLoading && !hasTriedSignin) {
    secureLocalStorage.removeItem("access_token");
    auth.signinRedirect();
    setHasTriedSignin(true);
  }

  var access_token=auth.user?.access_token ?? "";
  console.log(access_token);
  
  secureLocalStorage.setItem("access_token",access_token)
}, [auth, hasTriedSignin]);

    const handleTabChanges = (
      event: React.SyntheticEvent,
      newValue: string
    ) => {
      setTabvalue(newValue);
    };
    if(auth.isAuthenticated){
        return (
            <Box sx={{ width: "100%", marginTop: "8px", typography: "body1" }}>
            <TabContext value={tabvalue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList id="tabs" onChange={handleTabChanges} aria-label="lab API tabs example">
                <Tab value='1' label="َAdd new clothes" />
                <Tab value='2' label="Clothes management" />
                </TabList>
              </Box>
              <TabPanel value="1"><AddNewClothes/></TabPanel>
              <TabPanel value="2"><ClothesManagement/></TabPanel>
            </TabContext>
          </Box>
          )
    }
    else{
        return(null);
    }
  
}

export default ManagerPanel;
