import styled from '@emotion/styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>This is React Counter</Title>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
`;
