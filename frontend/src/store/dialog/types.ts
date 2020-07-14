export type DialogState = {
  open: true;
  component: JSX.Element;
} | {
  open: false;
  component: null;
};