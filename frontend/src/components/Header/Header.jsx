import Icon from "./user.svg";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Logo>アニナカ</Logo>
      <RightArea>
        <UserIcon src={Icon} />
      </RightArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: #ff7f50;
  justify-content: space-between;
`;
const Logo = styled.span`
  /* text-align: center; */
  color: white;
  font-size: 50px;
`;
const RightArea = styled.div`
  margin-right: 20px;
`;
const UserIcon = styled.img`
  width: 100%;
  height: 100%;
  background-color: #ff7f50;
  border-radius: 50%;
`;
export default Header;
