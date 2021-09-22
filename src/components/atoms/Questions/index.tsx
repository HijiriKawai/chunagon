import { VFC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import QuestionsResponse from '../../../models/QuestionResponse';

type QuestionsProps = {
  questions: QuestionsResponse;
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const StyledTr = styled.tr`
  :nth-child(odd) {
    background-color: #eee;
  }
`;

const StyledTd = styled.td`
  padding: 10px 0;
  text-align: center;
`;

const StyledTh = styled.th`
  padding: 10px 0;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  :active {
    color: #26a69a;
  }
  :hover {
    color: #26a69a;
  }
`;

const StyledP = styled.p``;

export const Questions: VFC<QuestionsProps> = (props: QuestionsProps) => {
  const { questions } = props;
  const items = questions.map((question) => {
    return (
      <StyledTr key={question.questionID}>
        <StyledTd>
          <StyledLink to={`question/${question.questionID}`}>{question.title}</StyledLink>
        </StyledTd>
        <StyledTd>
          {question.answeredCorrectly && <CheckBox />}
          {!question.answeredCorrectly && <CheckBoxOutlineBlank />}
        </StyledTd>
      </StyledTr>
    );
  });
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>問題名</StyledTh>
          <StyledTh>回答</StyledTh>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </StyledTable>
  );
};
