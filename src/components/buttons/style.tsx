import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: transparent;
    display: flex;
    justify-content: center;
    min-height: 2px;
    align-items: center;
    width: 120px;
    height: 50px;
    outline: none;
    border: none;
    color: var(--secondary);
    position: relative;
    cursor: pointer;

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 32px;
        height: 50px;
        background: rgba(214, 217, 59, 0.27);
        border-radius: 5px;
        transition: width 1s cubic-bezier(0.24, 0.97, 0.75, 0.2);
    }

    &:hover {
        background: transparent;
        &:before {
            width: 100%;
        }
    }

    &:focus {
        background: transparent;
    }

    p {
        font-size: 16px;
        font-weight: 600;
        margin-right: 4px;
    }

    div.arrows {
        display: flex;
        /* justify-content: center; */
        min-height: 2px;
        align-items: center;
    }

    svg {
        display: block;
        stroke: currentColor;
        color: rgba(214, 217, 59, 1);
        height: 20px;

        &:first-child {
            animation-name: first;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            margin-right: -8px;
        }

        &:last-child {
            animation-name: second;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }
    }

    @keyframes first {
        0% {
            color: rgba(214, 217, 59, 0.2);
        }
        30% {
            color: rgba(214, 217, 59, 0.6);
        }
        70% {
            color: rgba(214, 217, 59, 1);
        }
    }

    @keyframes second {
        0% {
            color: rgba(214, 217, 59, 0.6);
        }
        30% {
            color: rgba(214, 217, 59, 0.2);
        }
        70% {
            color: rgba(214, 217, 59, 1);
        }
    }
`;