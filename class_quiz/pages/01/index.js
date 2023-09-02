import {
    GroupImg,
    HeaderWrapper,
    MainWrapper,
    ProfileWrapper,
    ProfileTitle,
    ProfileName,
    ProfileArea,
    ProfileImg,
    NavWrapper,
    NavTitle,
    MiddleLine,
    QuestionWrapper,
    QuestionNumber,
    QuestionText,
    QuestionImg,
    QuestionArea,
    ButtomNavWrapper,
    ButtonNavImg,
    ButtonNavText,
    ButtonNavArea,
} from "../../styles/Emotion";

export default function Home() {
    return (
        <MainWrapper>
            <HeaderWrapper>
                <GroupImg src="../../img/Group.png" />
                <ProfileWrapper>
                    <ProfileTitle>마이</ProfileTitle>
                    <ProfileArea>
                        <ProfileImg src="../../img/profileimage.png" />
                        <ProfileName>임정아</ProfileName>
                        <img src="../../img/RightArrow.png" />
                    </ProfileArea>
                </ProfileWrapper>
                <NavWrapper>
                    <NavTitle>공지사항</NavTitle>
                    <NavTitle>이벤트</NavTitle>
                    <NavTitle>FAQ</NavTitle>
                    <NavTitle>Q&A</NavTitle>
                </NavWrapper>
            </HeaderWrapper>

            <MiddleLine src="../../img/Line.png" />

            <QuestionWrapper>
                <QuestionNumber>Q. 01</QuestionNumber>
                <QuestionArea>
                    <QuestionText>리뷰작성은 어떻게 하나요?</QuestionText>
                    <QuestionImg src="../../img/DownArrow.png" />
                </QuestionArea>

                <QuestionNumber>Q. 02</QuestionNumber>
                <QuestionArea>
                    <QuestionText>리뷰 수정/삭제는 어떻게 하나요?</QuestionText>
                    <QuestionImg src="../../img/DownArrow.png" />
                </QuestionArea>

                <QuestionNumber>Q. 03</QuestionNumber>
                <QuestionArea>
                    <QuestionText>아이디/비밀번호를 잊어버렸어요</QuestionText>
                    <QuestionImg src="../../img/DownArrow.png" />
                </QuestionArea>

                <QuestionNumber>Q. 04</QuestionNumber>
                <QuestionArea>
                    <QuestionText>회원탈퇴를 하고 싶어요.</QuestionText>
                    <QuestionImg src="../../img/DownArrow.png" />
                </QuestionArea>

                <QuestionNumber>Q. 05</QuestionNumber>
                <QuestionArea>
                    <QuestionText>출발지 설정은 어떻게 하나요?</QuestionText>
                    <QuestionImg src="../../img/DownArrow.png" />
                </QuestionArea>

                <QuestionNumber>Q. 06</QuestionNumber>
                <QuestionArea>
                    <QuestionText>비밀번호를 변경하고 싶어요</QuestionText>
                    <QuestionImg src="../../img/DownArrow.png" />
                </QuestionArea>
            </QuestionWrapper>

            <ButtomNavWrapper>
                <ButtonNavArea>
                    <ButtonNavImg src="../../img/Home.png" />
                    <ButtonNavText>홈</ButtonNavText>
                </ButtonNavArea>

                <ButtonNavArea>
                    <ButtonNavImg src="../../img/Position.png" />
                    <ButtonNavText>잇츠로드</ButtonNavText>
                </ButtonNavArea>

                <ButtonNavArea>
                    <ButtonNavImg src="../../img/Heart.png" />
                    <ButtonNavText>마이찜</ButtonNavText>
                </ButtonNavArea>

                <ButtonNavArea>
                    <ButtonNavImg src="../../img/My.png" />
                    <ButtonNavText>마이</ButtonNavText>
                </ButtonNavArea>
            </ButtomNavWrapper>
        </MainWrapper>
    );
}
