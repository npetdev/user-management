import { useState, createContext, useContext, useEffect } from "react";
import { initUser } from "../utils/initUser";
import { initCompany } from "../utils/initCompany";
import {
  user,
  company,
  MyContextData,
  MyContextProvider,
} from "../types/usersAndCompaniesTypes/types";

export const context = createContext<MyContextData | null>(null);
export const useUsersAndCompanies = () => useContext(context);
export const UsersAndCompaniesProvider: React.FC<MyContextProvider> = ({
  children,
}) => {
  const [user, setUser] = useState(initUser);
  const [users, setUsers] = useState<user[]>([]);
  const [userForEdit, setUserForEdit] = useState<user>(initUser);
  const [showUsers, setShowUsers] = useState<boolean>(true);
  const [isUserFormModalOpen, setIsUserFormModalOpen] =
    useState<boolean>(false);
  const [company, setCompany] = useState<company>(initCompany);
  const [companies, setCompanies] = useState<company[]>([]);
  const [companyForEdit, setCompanyForEdit] = useState<company>(initCompany);
  const [showCompanies, setShowCompanies] = useState<boolean>(true);
  const [isCompanyFormModalOpen, setIsCompanyFormModalOpen] =
    useState<boolean>(false);

  // synchronize users and companies with local storage
  useEffect(() => {
    const fromJSON: null | string = localStorage.getItem("Users");
    if (fromJSON) {
      const toObject = JSON.parse(fromJSON);
      if (toObject.length) {
        setUsers(toObject);
      }
    }
  }, []);
  useEffect(() => {
    const toJSON = JSON.stringify(users);
    localStorage.setItem("Users", toJSON);
  }, [users]);

  useEffect(() => {
    const fromJSON: null | string = localStorage.getItem("Companies");
    if (fromJSON) {
      const toObject = JSON.parse(fromJSON);
      if (toObject.length) {
        setCompanies(toObject);
      }
    }
  }, []);
  useEffect(() => {
    const toJSON = JSON.stringify(companies);
    localStorage.setItem("Companies", toJSON);
  }, [companies]);

  return (
    <context.Provider
      value={{
        isCompanyFormModalOpen,
        setIsCompanyFormModalOpen,
        isUserFormModalOpen,
        setIsUserFormModalOpen,
        user,
        setUser,
        users,
        setUsers,
        userForEdit,
        setUserForEdit,
        company,
        setCompany,
        companies,
        setCompanies,
        companyForEdit,
        setCompanyForEdit,
        showUsers,
        setShowUsers,
        showCompanies,
        setShowCompanies,
      }}
    >
      {children}
    </context.Provider>
  );
};
