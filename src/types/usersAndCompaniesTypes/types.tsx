import { ChangeEvent, FormEvent, ReactNode } from "react";
import { Dayjs } from "dayjs";

export type user = {
  id: string;
  companyId: string;
  company: string | null;
  firstName: string;
  lastName: string;
  date: Dayjs | null;
  position: string;
  phone: string;
};
export type company = {
  id: string;
  name: string;
  country: string;
  city: string;
  usersOfCompany: user[];
};
export type handleSubmit = (e: FormEvent<HTMLFormElement>) => void;
export type handleChange = (e: ChangeEvent<HTMLInputElement>) => void;
export type handleEdit = (id: string) => void;
export type handleDelete = (id: string) => void;
export type setUser = React.Dispatch<React.SetStateAction<user>>;
export type setUsers = React.Dispatch<React.SetStateAction<user[]>>;
export type setCompany = React.Dispatch<React.SetStateAction<company>>;
export type setCompanies = React.Dispatch<React.SetStateAction<company[]>>;
export type setShow = React.Dispatch<React.SetStateAction<boolean>>;
export type MyContextData = {
  isUserFormModalOpen: boolean;
  setIsUserFormModalOpen: setShow;
  isCompanyFormModalOpen: boolean;
  setIsCompanyFormModalOpen: setShow;
  user: user;
  users: user[];
  userForEdit: user;
  setUser: setUser;
  setUsers: setUsers;
  setUserForEdit: setUser;
  company: company;
  companyForEdit: company;
  companies: company[];
  setCompany: setCompany;
  setCompanies: setCompanies;
  setCompanyForEdit: setCompany;
  showUsers: boolean;
  setShowUsers: setShow;
  showCompanies: boolean;
  setShowCompanies: setShow;
};
export type MyContextProvider = {
  children: ReactNode;
};
