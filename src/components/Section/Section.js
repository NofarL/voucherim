import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: ${({ bg }) => `var(--${bg})`};
`;

export default Section;