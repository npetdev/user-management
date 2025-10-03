import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotExistPage: React.FC = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleBackHome}>
          Back Home
        </Button>
      }
    />
  );
};
export default NotExistPage;
