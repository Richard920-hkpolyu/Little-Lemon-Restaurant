import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import useConfetti from "../hooks/Confetti";
const ScreenSizeContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const fireConfetti = useConfetti();
  const [items, setItems] = useState([]);
  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

const modifyItems = useCallback((id, count) => {
  setItems((prevItems) => {
    const existingIndex = prevItems.findIndex((item) => item.id === id);
    if (existingIndex !== -1) {
      // If the ID exists, update the count
      const updatedItems = [...prevItems];
      updatedItems[existingIndex] = { ...updatedItems[existingIndex], count };
      return updatedItems;
    } else {
      return [...prevItems, { id, count }];
    }
  });
}, []);

  const contextValue = useMemo(
    () => ({
      screenSize,
      modifyItems,
      items,
      setItems,
      fireConfetti,
    }),
    [
      screenSize,
      modifyItems,
      items,
      setItems,
      fireConfetti,
    ]
  );

  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);

export default ScreenSizeProvider;
