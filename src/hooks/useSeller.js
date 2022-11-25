import { useEffect, useState } from "react";


const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerBuffering, setIsSellerBuffering] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `http://localhost:5000/buyers/seller/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsSeller(data.isSeller);
          setIsSellerBuffering(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerBuffering];
};
export default useSeller;