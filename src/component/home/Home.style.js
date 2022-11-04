import styled from 'styled-components';
import ProfilePic from '../../assests/images/profile-img.png';

export const HomeContainer = styled.div`
  width: 90%;
  max-width: 1152px;
  margin: 0 auto;
  padding-top: 4rem;

  .profile-containter {
    display: flex;
    justify-content: space-between;
    margin-bottom: 56px;
    position: relative;

    .content::after {
      content: 'hello';
      color: #fff;
    }

    .profile-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      position: relative;

      .img-container {
        border: none;
        position: relative;
        cursor: pointer;
        width: 88px;
        height: 88px;
        background: url(${ProfilePic});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        border-radius: 50%;

        .icon {
          opacity: 0;
          position: absolute;
          left: 30px;
          top: 55px;
        }

        &:hover {
          border: none;
          background: linear-gradient(
              0deg,
              rgba(52, 64, 84, 0.75),
              rgba(52, 64, 84, 0.75)
            ),
            url(${ProfilePic});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          border-radius: 50%;

          .icon {
            opacity: 1;
            transition: opacity 0.5s ease-in-out;
          }
        }

        &:focus {
          outline: none;
          border: 5.5px solid #ebe9fe;
          background: url(${ProfilePic});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          border-radius: 50%;
        }
      }
      p {
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 30px;
        text-align: center;
        color: #101828;
      }
    }

    .img-container {
      position: relative;
      width: 40px;
      height: 40px;
      background: ${({ toolTip }) => (toolTip ? '#F9FAFB' : '#fff')};
      border: 1px dashed #d0d5dd;
      border-radius: 20px;
      cursor: pointer;

      .desktop-share {
        display: none;
        transform: rotateY(180deg);
      }

      svg {
        align-self: flex-start;
        cursor: pointer;
        position: absolute;
        top: 9px;
        left: 9px;
        transform: translate(-50%, 50%);
        color: #98a2b3;
      }

      .mobile-share {
        top: 2.7px;
        left: 19px;
      }

      &:hover {
        background: #f9fafb;
        border: 1px dashed #d0d5dd;
        border-radius: 20px;

        svg {
          color: #667085;
        }
      }
      &:focus {
        outline: none;
        background: #ffffff;
        border: 1px dashed #d0d5dd;
        box-shadow: 0px 0px 0px 4px #f2f4f7;
        border-radius: 20px;
      }

      &:disabled {
        background: #f9fafb;
        border: 1px dashed #eaecf0;
        border-radius: 20px;
      }
    }

    /* ToolTip */
    span {
      display: none;
      position: absolute;
      right: 30px;
      top: 5px;
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
      &:hover {
        background: #d0d5dd;
        border: 1px solid #d0d5dd;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
      &:focus {
        outline: none;
        background: #eaecf0;
        border: 1px solid #98a2b3;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #ebe9fe;
        border-radius: 8px;
      }
      &:disabled {
        background: #fcfcfd;
        border: 1px solid #f2f4f7;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
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

  @media screen and (min-width: 990px) {
    .profile-containter {
      width: 70%;
      margin: 0 auto;
      margin-bottom: 56px;
      .img-container {
        .mobile-share {
          display: none;
        }

        .desktop-share {
          display: flex;
        }
      }

      span {
        display: flex;
        opacity: ${({ toolTip }) => (toolTip ? '1' : '0')};
        position: absolute;
        right: 30px;
        top: 5px;
        transition: opacity 0.5s ease-in-out;
      }
    }
  }
`;
