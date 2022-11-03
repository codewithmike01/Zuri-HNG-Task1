import styled from 'styled-components';

export const ContactConatiner = styled.div`
  width: 80%;
  max-width: 1152px;
  margin: 0 auto;
  padding-top: 4rem;

  h2 {
    color: #101828;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 44px;
    margin-bottom: 1.2rem;
  }

  p {
    color: #475467;
    font-size: 1.25rem;
    line-height: 30px;
    font-weight: 400;
    margin-bottom: 3rem;
  }

  .formContainer {
    form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      .username {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        width: 100%;
        .input-container {
          width: 100%;
          input {
            width: 100%;
          }
        }
      }

      .input-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.375rem;

        label {
          font-size: 0.7rem;
          font-weight: 500;
          line-height: 20px;
          color: #344054;
          font-weight: 500;
        }

        input {
          border: 1px solid #d0d5dd;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 8px;
          background: #ffffff;
          padding: 10px 14px;

          width: 100%;
          height: 44px;

          &:focus {
            outline: none;
            border: 1px solid #84caff;
          }

          &::placeholder {
            color: #667085;
            font-weight: 400;
            font-size: 0.7rem;
            line-height: 24px;
          }
        }
      }

      .textarea-container {
        width: 100%;

        textarea {
          width: 100%;
          height: 132px;
          background: #ffffff;
          border: 1px solid #d0d5dd;
          box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
          border-radius: 8px;
          padding: 12px 14px;

          &:focus {
            outline: none;
            border: 1px solid #84caff;
          }
        }
      }
    }
  }
`;
