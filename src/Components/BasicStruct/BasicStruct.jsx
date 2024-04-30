import { useSelector } from "react-redux";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function BasicStruct() {
  const error = useSelector(state => state.error);
  
  return (
    <div className="bg-slate-400 [word-spacing:-0.3rem] font-mono w-screen h-screen">
        <Header/>
        <Outlet/>
      <h1 className=' text-xl font-medium absolute bottom-3 left-1/2 -translate-x-1/2 text-center '>{error}</h1>

    </div>
    
  )
}

export default BasicStruct
