import styled, { css } from "styled-components";

const styleCss = css`
  font-family: ${props => props.theme.fontFamily};
  text-align: left;

  color: ${props =>
    props.color
      ? props.color
      : props.theme.text
      ? props.theme.text.color
      : "#333"};
  ${props =>
    props.truncate === true &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  ${props =>
    (typeof props.fontSize === "string" &&
      css`
        font-size: ${props.fontSize};
      `) ||
    (typeof props.fontSize === "number" &&
      css`
        font-size: ${props.fontSize}px;
      `)};
  font-weight: ${props =>
    props.fontWeight ? props.fontWeight : props.bold == true ? 700 : 500};
  ${props =>
    props.italic == true &&
    css`
      font-style: italic;
    `}
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props => props.backgroundColor};
    `}
  ${props =>
    props.inline
      ? css`
          display: inline-block;
        `
      : props.display &&
        css`
          display: ${props => props.display};
        `}
  margin: 0;
`;

const StyledText = styled.p`
  ${styleCss};
`;

export default StyledText;
