import { useState, createContext, useContext } from "react";
import { initUser } from "../utils/initUser";
import { initCompany } from "../utils/initCompany";
import {
  user,
  company,
  MyContextData,
  MyContextProvider,
} from "../types/usersAndCompaniesTypes/types";
import useLocaleStorage from "../hooks/useLocaleStorage";
export const context = createContext<MyContextData | null>(null);
export const useUsersAndCompanies = () => useContext(context);
export const UsersAndCompaniesProvider: React.FC<MyContextProvider> = ({
  children,
}) => {
  const { users, setUsers, companies, setCompanies } = useLocaleStorage();
  const [user, setUser] = useState(initUser);
  const [userForEdit, setUserForEdit] = useState<user>(initUser);
  const [showUsers, setShowUsers] = useState<boolean>(true);
  const [isUserFormModalOpen, setIsUserFormModalOpen] =
    useState<boolean>(false);
  const [company, setCompany] = useState<company>(initCompany);
  const [companyForEdit, setCompanyForEdit] = useState<company>(initCompany);
  const [showCompanies, setShowCompanies] = useState<boolean>(true);
  const [isCompanyFormModalOpen, setIsCompanyFormModalOpen] =
    useState<boolean>(false);

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
