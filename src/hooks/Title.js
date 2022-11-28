import { useEffect } from "react"

const Title = title =>{
  useEffect(()=>{
    document.title =`${title} - PhoneSpaceBD`;
  },[title])
};
export default Title;