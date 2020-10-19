import { ButtonPropType } from "~/lib/type/commontypes";
import BoxShadowCard from "~/components/card/BoxShadowCard";

const Button: React.FC<ButtonPropType> = (props) => {
  const CustomTag = props.link ? "a" : "div";
  return (
    <>
      <CustomTag
        href={props.link}
        target={props.link ? "_blank" : null}
        className="button__a"
        onClick={props.clickEvent}
      >
        <BoxShadowCard
          clName={`button ${props.clName || ""}`}
          cardStyle={cardStyle(props.backColor, props.textColor, props.scale)}
        >
          {props.children}
        </BoxShadowCard>
      </CustomTag>
      <style jsx>{`
        .button {
          display: inline-block;
          padding: 10px 15px;
        }
        .button__a {
          display: inline-block;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

const cardStyle = (backColor: string, textColor: string, scaleArg: number) => {
  const scale = scaleArg || 1;
  return {
    padding: `${10 * scale}px ${15 * scale}px`,
    fontSize: `${scale}em`,
    backgroundColor: backColor,
    color: textColor,
  };
};

export default Button;
