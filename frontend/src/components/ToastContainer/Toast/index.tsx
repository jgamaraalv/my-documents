import React, { useEffect } from 'react';
import { FiAlertCircle, FiXCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';
import { useDispatch } from "react-redux";
 
import { ToastMessage } from "../../../store/toast/types";
import { removeToast } from "../../../store/toast/actions";
import { StyledContainer } from './styles';

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiInfo size={24}/>,
  error: <FiAlertCircle size={24}/>,
  success: <FiCheckCircle size={24}/>
}

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeToast(message.id));
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, [message.id, dispatch]);

  return (
    <StyledContainer 
      style={style} 
      type={message.type} 
      hasDescription={!!message.description}
    >
      {icons[message.type || 'info']}

      <div>
        <strong> 
          {message.title}
        </strong>

        {message.description && (
          <p>
            {message.description}
          </p>
        )}  
      </div>

      <button onClick={() => dispatch(removeToast(message.id))} type="button">
        <FiXCircle size={18}/>
      </button>
    </StyledContainer>
  );
};

export default Toast;