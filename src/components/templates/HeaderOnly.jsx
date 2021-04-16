import { Header } from "../atom/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
};
