import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;

  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  padding: 16px;
  background-color: #fff;
  box-shadow: #ddd 0px 0px 2px 1px;
  border-radius: 8px;
`;
