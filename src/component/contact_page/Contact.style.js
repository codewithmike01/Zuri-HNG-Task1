import styled from 'styled-components';
import Checked from '../../assests/images/check.svg';

export const ContactContainer = styled.div`
  width: 80%;
  max-width: 1152px;
  margin: 0 auto;
  padding-top: 4rem;
  margin-bottom: 7.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contact-wrapper {
    width: 100%;
    h2 {
      color: #101828;
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 44px;
      margin-bottom: 1.2rem;
    }

    p {
      color: #475467;
      font-size: 0.9rem;
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

        .checkbox {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          position: relative;

          /* Container */

          .check {
            position: relative;

            input {
              width: 20px;
              height: 20px;
              background: #ffffff;
              border: 1px solid #d0d5dd;
              border-radius: 6px;
            }

            input::before {
              position: relative;
              display: block;
              /* display: none; */
              width: 20px;
              height: 20px;
              border: 1px solid #808080;
              content: '';
              background: #fff;
            }

            input:after {
              cursor: pointer;
              position: absolute;
              display: block;
              left: -1px;
              top: -1px;
              width: 25px;
              height: 25px;
              background: #ffffff;
              border: 1px solid #d0d5dd;
              border-radius: 6px;
              content: '';
              background-repeat: no-repeat;
              background-position: center;
            }

            input:checked:after {
              background-image: url(${Checked});
              background-repeat: no-repeat;
              background-position: center;
              border: 1px solid #1570ef;
            }

            input:not(:checked):focus::after {
              box-shadow: none;
            }

            /* Focus */
            input:not(:checked):focus:after {
              background: #ffffff;
              border: 1px solid #84caff;
              box-shadow: 0px 0px 0px 4px #d1e9ff;
              border-radius: 6px;
            }

            input:not(:disabled):checked:focus:after {
              border: 1px solid #84caff;
              border-radius: 6px;
              background-image: url(${Checked});
              background-repeat: no-repeat;
              background-position: center;
            }

            /* Disabled */
            input:disabled:after {
              border: 1px solid #d0d5dd;
              border-radius: 6px;
              background: #f2f4f7;
            }

            /* input:not(:disabled):checked:hover:after {
              background-image: url(${Checked});
              background-repeat: no-repeat;
              background-position: center;
            } */

            /* Hover */
            /* input:not(:disabled):hover:after {
              cursor: pointer;
              background: #ffffff;
              border: 1px solid #84caff;
              box-shadow: 0px 0px 0px 4px #d1e9ff;
              border-radius: 6px;
            } */

            input:not(:disabled):hover:before {
              border-color: #3d7591;
            }
          }

          /* End */

          .agreement {
            font-size: 0.8rem;
            color: #475467;
            font-weight: 400;
            line-height: 24px;
          }
        }
        .btn-container {
          width: 100%;
          height: 48px;
          .btn {
            border: none;
            color: #fff;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 12px 20px;
            gap: 8px;
            width: 100%;
            background: #1570ef;
            background: #1570ef;
            box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .formContainer {
      form {
        .username {
          flex-direction: column;
        }
      }
    }
  }
`;
