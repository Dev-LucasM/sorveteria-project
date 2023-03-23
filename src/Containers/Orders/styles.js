import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2e8b57;
`;

export const Container = styled.div`
  width: 414px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8b008b;
  min-height: 100vh;
`;

export const Image = styled.img`
  padding-top: 20px;
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #ffffff;

  margin-top: 25px;
  margin-bottom: 50px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const InputLabel = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: -0.408px;
  color: #eeeeee;

  padding-left: 10px;
  margin-bottom: 1px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: #ee82ee;
  border: none;
  outline: none;
  border-radius: 14px;

  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;

  padding-left: 10px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;

  font-weight: 900;
  font-size: 17px;
  line-height: 2px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #c71585;
  border: none;

  margin-bottom: 51px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.6;
  }
`;

export const Order = styled.li`
  display: flex;
  justify-content: space-between;

  background: #ee82ee;
  border: none;
  outline: none;
  border-radius: 14px;

  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;

  list-style: none;
  text-transform: capitalize;

  margin-bottom: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-left: 27px;
  }

  #p2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #2e8b57;
    padding-bottom: 8px;
  }
  #p1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    padding-top: 8px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding-right: 12px;

    img{
      padding-top: 0;
    }
  }
`;
