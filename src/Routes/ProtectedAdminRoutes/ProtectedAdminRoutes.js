import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Buffering from '../../Pages/Shared/Buffering/Bufferning';


const ProtectedAdminRoutes = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const [isAdmin, isAdminBuffering] = useAdmin(user?.email);
  const location = useLocation();
  if(loading || isAdminBuffering){
    return <Buffering></Buffering>
  }

  if(user && isAdmin){
    return children;
  }
  
  return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default ProtectedAdminRoutes;