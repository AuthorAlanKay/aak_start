import * as React from 'react';

export interface IAppProps {}

export function App(props: IAppProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => setOpen(true), []);

  const handleClose = React.useCallback(() => setOpen(false), []);

  return <div></div>;
}
