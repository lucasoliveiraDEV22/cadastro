import styled from "styled-components";
import Background from "../../assets/Back-purple.svg"
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: url("${Background}");
  background-size: cover;
`;
export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItems = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  width: 414px;
  height: 896px;
  display: flex;
  flex-direction: column;
  padding: 50px 36px;
  border-radius: 61px 61px 0px 0px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 80px;

  color: #ffffff;
`;

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -0.408px;
  color: #eeeeee;
  padding-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  outline: none;
  border: none;
  width: 342px;
  height: 58px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 34px;
  padding-left: 25px;
`;

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  width: 342px;
  height: 74px;
  left: 35px;
  top: 497px;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 140px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
  
`;
