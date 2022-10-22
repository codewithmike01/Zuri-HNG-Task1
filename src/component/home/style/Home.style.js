import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 90%;
  max-width: 1152px;
  margin: 0 auto;
  padding-top: 4rem;

  .profile-containter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 56px;

    .content::after {
      content: 'hello';
      color: #fff;
    }

    .profile-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      p {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 30px;
        text-align: center;
        color: #101828;
      }
    }

    .desktop-share {
      display: none;
    }

    img {
      align-self: flex-start;
      cursor: pointer;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.125rem;
    line-height: 28px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      text-decoration: none;
      color: #101828;
      height: 56px;
      background: #eaecf0;
      border: 1px solid #eaecf0;
      border-radius: 8px;
    }
  }

  .social-links {
    margin-top: 24px;
    margin-bottom: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 26.25px;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    gap: 10px;
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
  }

  @media screen and (min-width: 990px) {
    .profile-containter {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 56px;

      .mobile-share {
        display: none;
      }

      .desktop-share {
        display: flex;
      }
    }
  }
`;
