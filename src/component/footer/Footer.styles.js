import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 1rem;
  margin-top: 20px;
  padding-bottom: 28px;
  img {
    width: 132.13px;
    height: 32px;
  }
  p {
    font-size: 0.7rem;
    line-height: 24px;
    color: #667085;
  }

  @media screen and (min-width: 990px) {
    footer {
      justify-content: space-between;
      padding-bottom: 32px;
    }
  }
`;
