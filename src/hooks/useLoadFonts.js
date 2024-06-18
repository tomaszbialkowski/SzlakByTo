import { useState, useEffect } from "react";
import { loadFonts } from "../utils/loadFonts";

export const useLoadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  return fontsLoaded;
};
