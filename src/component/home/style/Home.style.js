import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 90%;
  max-width: 1152px;
  margin: 0 auto;
  padding-top: 4rem;

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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 26.25px;
  }
`;
