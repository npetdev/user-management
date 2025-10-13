import { useState } from "react";
import { useEffect } from "react";
import { user, company } from "../types/usersAndCompaniesTypes/types";
const useLocaleStorage = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [companies, setCompanies] = useState<company[]>([]);
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

  return { users, setUsers, companies, setCompanies };
};

export default useLocaleStorage;
