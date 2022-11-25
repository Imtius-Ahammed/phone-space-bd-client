import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerBuffering, setIsBuyerBuffering] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `http://localhost:5000/buyers/buyer/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsBuyer(data.isSeller);
          setIsBuyerBuffering(false);
        });
    }
  }, [email]);
  return [isBuyer, isBuyerBuffering];
};
export default useBuyer;