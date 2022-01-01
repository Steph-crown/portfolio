import { FC } from "react";
import { FooterContainer } from "./style";
import left from "./../../assets/left.svg";
import { Button } from "../buttons";
import { ReactComponent as git } from "./../../assets/git.svg";
import { ReactComponent as gmail } from "./../../assets/gmail.svg";
import { ReactComponent as insta } from "./../../assets/insta.svg";
import { ReactComponent as linked } from "./../../assets/linked.svg";
import { ReactComponent as twitter } from "./../../assets/twitter.svg";

export const Footer: FC = () => {
    const socials: {
        icon: React.FunctionComponent<
            React.SVGProps<SVGSVGElement> & {
                title?: string | undefined;
            }
        >;
        link: string;
    }[] = [
        { icon: git, link: "https://github.com/steph-crown" },
        { icon: gmail, link: "mailto:emmanuelstephen024@gmail.com" },
        { icon: insta, link: "https://www.instagram.com/stephcrown06/" },
        { icon: linked, link: "https://www.linkedin.com/in/stephcrown/" },
        { icon: twitter, link: "https://twitter.com/stephcrown06" },
    ];
    return (
        <FooterContainer>
            <section>
                <div className="fir">
                    <h1>
                        LET'S BUILD
                        <br />
                        SOMETHING TOGETHER
                    </h1>
                    <p>
                        Do you think I'd be a good companion for your next
                        adventure? Take a minute to tell me about your project,
                        or if you need some front-end development help, please
                        send me a message below. I'm currently AVAILABLE for any
                        front-end development projects.
                    </p>
                </div>
                <div className="sec">
                    <img src={left} alt="look left" />
                    <Button>Send Message</Button>
                </div>
            </section>
            <div className="hor-line"> </div>

            <div className="flexx">
                <div className="socials">
                    {socials.map((soc) => (
                        <a href={soc.link} key={soc.link}>
                            <soc.icon />
                        </a>
                    ))}
                </div>
                <p>Designed and developed by Steph Crown</p>
            </div>
        </FooterContainer>
    );
};
