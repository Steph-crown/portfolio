import styled from "styled-components";

export const GridContainer = styled.div`
    .default-layout__bg {
        display: grid;
        grid-template-columns: repeat(16, 1fr);
        grid-gap: 1px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
    }

    .default-layout__bg span {
        background: #000624;
        background: rgba(24, 5, 41, 1);

        display: block;
        border-radius: 10px;
    }

    .default-layout__bg-shadow[data-hide="true"] {
        font-variant: JIS04;
        opacity: 0;
        transition: 0.4s ease-out;
        pointer-events: none;
    }

    .default-layout__bg-shadow {
        background: #000624;
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
