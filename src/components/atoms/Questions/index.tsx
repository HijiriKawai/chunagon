import styled from '@emotion/styled';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { VFC } from 'react';
import { Link } from 'react-router-dom';

import { Question } from '../../../models/QuestionResponse';

type QuestionsProps = {
  questions: Question[];
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

export const Questions: VFC<QuestionsProps> = (props: QuestionsProps) => {
  const { questions } = props;
  const items = [...questions]
    .sort((a, b) => {
      return a.level - b.level;
    })
    .map((question) => {
      const tagsText = question.tags.map((tag) => {
        return <Typography key={tag.id}>{tag.name}</Typography>;
      });
      return (
        <StyledTr key={question.questionID}>
          <StyledTd>
            <StyledLink to={`question/${question.questionID}`}>{question.title}</StyledLink>
          </StyledTd>
          <StyledTd>
            {question.answeredCorrectly && <CheckBox />}
            {!question.answeredCorrectly && <CheckBoxOutlineBlank />}
          </StyledTd>
          <StyledTd>{tagsText}</StyledTd>
          <StyledTd>{question.level}</StyledTd>
        </StyledTr>
      );
    });
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTh>問題名</StyledTh>
          <StyledTh>回答</StyledTh>
          <StyledTh>タグ</StyledTh>
          <StyledTh>レベル</StyledTh>
        </tr>
      </thead>
      <tbody>{items}</tbody>
    </StyledTable>
  );
};
