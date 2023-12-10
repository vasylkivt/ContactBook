import styled from 'styled-components';
import { Field, Form } from 'formik';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const FormStyled = styled(Form)`
  position: ${({ $position }) => (!$position ? 'relative' : $position)};

  width: 280px;
  padding: 20px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: 375px) {
    width: 320px;
    padding: 25px;
    border-radius: 12px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 50px;
    border-radius: 20px;
  }
`;

export const InputWrap = styled.label`
  position: relative;

  width: 100%;
  max-width: 280px;
  border-radius: 5px 5px 0 0;
`;

export const InputName = styled.span`
  position: absolute;
  top: 20px;
  left: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
`;
export const BgFocus = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
`;

export const InputStyled = styled(Field)`
  appearance: none;
  border-radius: 5px 5px 0 0;
  width: 100%;
  border: 0;

  font-family: inherit;
  padding: 16px 12px 0 12px;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  background: rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.15s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  }

  &:not(:placeholder-shown) + ${InputName} {
    color: rgba(255, 255, 255, 0.5);
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  &:focus {
    background: rgba(0, 0, 0, 0.3);
    outline: none;
    box-shadow: inset 0 -2px 0 ${({ theme }) => theme.colors.accent};
  }

  &:focus + ${InputName} {
    color: ${({ theme }) => theme.colors.accent};
    transform: translate3d(0, -12px, 0) scale(0.75);
  }

  &:focus + ${InputName} + ${BgFocus} {
    transform: scaleX(1);
    transition: all 0.1s ease;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};

  font-size: 14px;
  text-align: center;
  line-height: 1.4;
  font-weight: 400;
  @media screen and (min-width: 375px) {
    font-size: 16px;
  }
`;

export const StyledLink = styled(Link)``;

//// Form elements ==================================
export const InvalidInput = styled.div`
  /* position: absolute; */
  margin-top: 5px;
  /* width: 300px; */
  padding: 5px;
  border-radius: 5px;
  /* z-index: 2; */
  background-color: #00000025;
  /* top: 50%; */
  /* transform: translateY(-50%); */
  /* left: calc(100% + 10px); */
  color: ${({ theme: { colors } }) => colors.red};
`;

export const PersonIcon = styled(BsPerson)`
  fill: ${({ theme }) => theme.colors.accent};
  position: absolute;
  right: 5px;
  top: 20px;
  width: 25px;
  height: 25px;
`;

export const TelephoneIcon = styled(AiOutlinePhone)`
  fill: ${({ theme }) => theme.colors.accent};
  position: absolute;
  right: 5px;
  top: 20px;
  width: 25px;
  height: 25px;
`;
export const PasswordIcon = styled(RiLockPasswordLine)`
  fill: ${({ theme }) => theme.colors.accent};
  position: absolute;
  right: 5px;
  top: 20px;
  width: 25px;
  height: 25px;
`;
export const EMailIcon = styled(AiOutlineMail)`
  fill: ${({ theme }) => theme.colors.accent};
  position: absolute;
  right: 5px;
  top: 20px;
  width: 25px;
  height: 25px;
`;
