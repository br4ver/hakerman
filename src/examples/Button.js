import styled from 'styled-components'

const Button = styled.button`
  color: var(--primaryColor);
  text-transform: uppercase;
  font-family: gilroy-light;
  background: none;
  font-size: 1.5rem;
  padding: 1rem;
  border: 2px solid #ffffff;
  padding: 0.9rem 1.2rem;
  border: none;
  text-align: right;
  :focus {
    outline: none;
  }
  :hover {
    color: var(--goferBlue);
  }
`
export default Button