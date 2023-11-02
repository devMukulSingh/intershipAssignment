import Header from "./components/Header";
import Home from "./pages/Home";
import { Box, styled } from "@mui/material";

const MainBox = styled(Box)({
  marginTop:'4rem',
  display:'flex',
  alignItems:'center',
  justifyContent:"center",
   width:'calc(100vw - 1.1rem)',
})
function App() {

  return (
    <>  
      <Header/>
      <MainBox  >
        <Home/>
      </MainBox>
    </>
  )
}

export default App
