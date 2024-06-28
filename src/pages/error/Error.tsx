import { useRouteError } from "react-router-dom"
import styled from "styled-components";


const StyledDiv=styled.div`
width: 100%;
height: 100%;
`;

const ErrorPage = () => {
    const error=useRouteError() as {statusText:string,message:string};

    return (
        <StyledDiv>
            <p>{error.statusText || error.message}</p>
        </StyledDiv>
    )
}

export default ErrorPage
