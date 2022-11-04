import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 90%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 38px 0px;

  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    gap: 3rem;
    margin-top: 20px;

    img {
      width: 132.13px;
      height: 32px;
    }
    p {
      font-size: 0.7rem;
      line-height: 24px;
      color: #667085;
    }
  }

  @media screen and (max-width: 375px) {
    .main {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.3rem;
    }
  }

  @media screen and (min-width: 990px) {
    footer {
      .main {
        justify-content: space-between;
        padding-bottom: 32px;
      }
    }
  }
`;
