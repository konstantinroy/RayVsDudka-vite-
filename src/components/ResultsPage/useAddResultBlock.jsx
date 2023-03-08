import { useState, useEffect } from "react";

const useAddResultBlock = () => {
  const [addResultBlock, setAddResultBlock] = useState(false);

  const toggleAddResultBlock = () => {
    if (addResultBlock != true) {
      localStorage.setItem("addResultBlock", "true");
      setAddResultBlock(true);
    } else {
      localStorage.setItem("addResultBlock", "false");
      setAddResultBlock(false);
    }
    console.log("addResultBlock", addResultBlock);
  };

  const removeAddResultBlock = () => {
    if (addResultBlock) {
      localStorage.setItem("addResultBlock", "false");
      setAddResultBlock(false);
      localStorage.removeItem("date");
      localStorage.removeItem("dudkaScore");
      localStorage.removeItem("rayScore");
      localStorage.removeItem("dudkaGoalsQty");
      localStorage.removeItem("rayGoalsQty");
      localStorage.removeItem("matches");
      localStorage.removeItem("addResultBlock");
    }
  };

  useEffect(() => {
    const localPopup = localStorage.getItem("addResultBlock");
    if (localPopup == "true") {
      setAddResultBlock(localPopup);
    }
    console.log("addResultBlock", addResultBlock);
  }, []);
  return {
    addResultBlock,
    toggleAddResultBlock,
    removeAddResultBlock,
  };
};

export default useAddResultBlock;
