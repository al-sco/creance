import { Image} from "@chakra-ui/react";
import { useRouteError } from "react-router-dom"
import styled from "styled-components";
import NetworkIssue from '../../assets/network_issue.svg'

const StyledDiv = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    height: 100%;
    widgth: 100%
`;

const StyledH1 = styled.h1`
    font-size: 2rem;
`;

const StyledP = styled.h1`
    font-size: 1.5rem;
`;

const ErrorPage = () => {
    const error = useRouteError() as { statusText: string, message: string };
    console.log(error)
    return (
        <StyledDiv>
            <Image src={NetworkIssue} />
            <StyledH1>Oups, une erreur c’est produite</StyledH1>
            <StyledP>{error.statusText || error.message}</StyledP>
        </StyledDiv>
    )
}

export default ErrorPage
