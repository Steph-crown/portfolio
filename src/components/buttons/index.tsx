import { FC } from "react";
import { IButtonProps } from "./interface";
import { ButtonContainer } from "./style";
import { ReactComponent as ArrowRight } from "./../../assets/arrow-right.svg";

export const Button: FC<IButtonProps> = ({ children, style, dark }) => {
    return (
        <ButtonContainer style={style} dark={dark}>
            <p>{children}</p>
            <div className="arrows">
                <ArrowRight />
                <ArrowRight />
            </div>
        </ButtonContainer>
    );
};
