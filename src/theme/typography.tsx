import styled from "styled-components";
import colors from "./color";



export const StyledTitle = styled.h1<{ $textColor?: string }>`
font-size: 36px;
color: ${props => props.$textColor ?? colors.black};
font-family: "Ubuntu", sans-serif;
font-weight: bold;
`;

export const StyledSubTitle = styled.h1<{ $textColor?: string }>`
font-size: 24px;
color: ${props => props.$textColor ?? colors.black};
font-family: "Ubuntu", sans-serif;
font-weight: bold;
`;

export const StyledMenuItem = styled.button<{ $textColor?: string, $backgroundColor?: string }>`
font-size: 20px;
padding: 10px 17px;
margin-bottom: 8px;
max-lines: 1;
text-overflow: ellipsis;
white-space: nowrap;
  overflow: hidden;
background-color: ${props => props.$backgroundColor};
border-radius: 8px;
color: ${props => props.$textColor ?? colors.black};
font-weight: 500;
transition: background-color 700ms ease, color 700ms ease;
`;


export const StyledDefaultText = styled.p<{ $textColor?: string }>`
font-size: 14px;
color: ${props => props.$textColor ?? colors.black};
font-weight: 400;
`;


export const StyledTablePlaceholder = styled.p<{ $textColor?: string }>`
font-size: 18px;
color: ${props => props.$textColor ?? colors.thinGray};
font-weight: 400;
`;

export const StyledTableHeader = styled.p`
font-size: 12px;
text-transform: uppercase;
color: ${colors.thinGray};
font-weight: bold;
`;