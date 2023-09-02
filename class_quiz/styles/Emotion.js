import styled from "@emotion/styled";

export const MainWrapper = styled.div`
    width: 640px;
    height: 1138px;
    border: 1px solid #000000;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const HeaderWrapper = styled.div`
    width: 85%;
    height: 250px;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* 추가 */
`;

export const GroupImg = styled.img`
    width: 23px;
    height: 23px;
    align-self: flex-end; /* 추가 */
`;

export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProfileTitle = styled.h1`
    font-size: 40px;
    font-weight: 700;
`;

export const ProfileArea = styled.div`
    display: flex;
    align-items: center;
`;

export const ProfileImg = styled.img`
    width: 60px;
    height: 60px;
`;

export const ProfileName = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-left: 20px;
    margin-right: 10px;
`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`;

export const NavTitle = styled.div`
    font-size: 30px;
    color: #cacaca;
    font-weight: 700;
    cursor: pointer;
`;

export const MiddleLine = styled.img`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 50px;
    height: 750px;
`;

export const QuestionArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`;

export const QuestionNumber = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: #adadad;
`;

export const QuestionText = styled.div`
    font-weight: 400;
    font-size: 24px;
    color: #000000;
`;

export const QuestionImg = styled.img`
    width: 22px;
    height: 22px;
`;

export const ButtomNavWrapper = styled.div`
    width: 640px;
    height: 96px;
    border-top: 1px solid grey;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const ButtonNavArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonNavImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const ButtonNavText = styled.div`
    font-size: 16px;
    font-weight: 400;

    color: #adadad;
`;
