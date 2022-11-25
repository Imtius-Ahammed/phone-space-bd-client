import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminBuffering, setIsAdminBuffering] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `http://localhost:5000/buyers/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminBuffering(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminBuffering];
};
export default useAdmin;