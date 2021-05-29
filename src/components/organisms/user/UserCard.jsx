import { memo } from "react";
import styled from "styled-components";
import { Card } from "../../atom/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
  console.log("UserCard");
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDL>
        <dt>Mail</dt>
        <dd>{user.name}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd>{user.website}</dd>
      </SDL>
    </Card>
  );
});

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0;

  dt {
    float: left;
    font-size: 12px;
  }

  dd {
    padding: 0 0 20px 30px;
    font-size: 12px;
    overflow-wrap: break-word;

    &:last-child {
      padding-bottom: 0;
    }
  }
`;
