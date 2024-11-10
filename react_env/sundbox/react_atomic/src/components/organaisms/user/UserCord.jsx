import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName iamge={user.iamge} name={user.name} />
      <SDDL>
        <dt>特徴1</dt>
        <dd>- {user.feature1}</dd>
        <dt>特徴2</dt>
        <dd>- {user.feature2}</dd>
        <dt>特徴3</dt>
        <dd>- {user.feature3}</dd>
      </SDDL>
    </Card>
  );
};

const SDDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    froat: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
