import styled from "styled-components"

export const FooterContainer = styled.div`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

export const FooterAuthor = styled.a`
    font-size: 0.75em;
    color: ${props => props.theme.colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

    &:hover {
        color: ${props => props.theme.colors.blue900};

        .FooterSpooch {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`

export const FooterSpooch = styled.img`
    max-width: 33px;
    margin-top: 0.25em;
`
