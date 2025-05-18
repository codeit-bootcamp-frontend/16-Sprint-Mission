import styled from 'styled-components';

export const Head = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: var(--white-color);
  height: 70px;
  padding: 9px 0;
  border-bottom: 1px solid var(--divider-color);
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 51px;
  margin: var(--nav-margin);
  justify-content: space-between;
  flex-grow: 1;

  @media screen and (min-width: 1200px){
    flex: 0 1 1120px;
  }
`
export const Button = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--secondary-gray100);
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  padding: 12px 23px;
  line-height: 26px;
  height: 48px;
  width: 128px;

  &:hover{
    background-color: var(--primary-hover);
  }
`