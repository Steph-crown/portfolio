import styled from "styled-components";

export const ProjectSectionContainer = styled.div`
    padding: 0px var(--side-pad);

    h6 {
        color: var(--white);
        font-size: 1.5em;
        font-weight: 500;

        @media (max-width: 480px) {
            font-size: 1.1em;
        }
    }

    h1 {
        color: rgba(155, 138, 171, 0.3);
        font-size: 9.375em;
        font-family: Oswald;
        margin-top: -40px;

        @media (max-width: 480px) {
            font-size: 4.5em;
            margin-top: -20px;
        }
    }
`;
