import React from 'react';
import { useTransition } from 'react-spring';
 
import Toast from './Toast';
import { ToastMessage } from '../../store/toast/types';
import { StyledContainer } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions= useTransition(
    messages, 
    (message) => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' }
    }
  );

  return (
    <StyledContainer>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item}/>
      ))}
    </StyledContainer>
  );
};

export default ToastContainer;