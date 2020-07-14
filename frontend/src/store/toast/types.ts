export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

export interface ToastState {
  messages: ToastMessage[];
}