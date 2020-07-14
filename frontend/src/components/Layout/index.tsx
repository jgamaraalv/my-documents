import React from "react";
import { useSelector } from "react-redux";

import ToastContainer from "../ToastContainer";
import ModalContainer from "../ModalContainer";
import ApplicationState from "../../store/State";
import Topbar from "./Topbar";

const Layout: React.FC = ({ children }) => {
  const dialogState = useSelector((state: ApplicationState) => state.dialog);
  const toastState = useSelector((state: ApplicationState) => state.toast);

  return (
    <>
      <Topbar/>
    
      {children}

      {dialogState.open && (
        <ModalContainer>
          {dialogState.component}
        </ModalContainer>
      )}

      <ToastContainer messages={toastState.messages}/>
    </>
  );
};

export default Layout;