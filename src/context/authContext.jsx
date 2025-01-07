import { createContext, useState, useEffect } from "react";

// Cek apakah pengguna memiliki refreshToken di localStorage
const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState("");

  // Muat data `name` dari localStorage saat aplikasi dimuat
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  // Simpan data `name` ke localStorage setiap kali `name` diperbarui
  useEffect(() => {
    if (name) {
      localStorage.setItem("name", name);
    } else {
      localStorage.removeItem("name");
    }
  }, [name]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};
