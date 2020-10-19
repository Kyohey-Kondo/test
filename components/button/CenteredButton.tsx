import Button from "./Button";
import { ButtonPropType } from "~/lib/type/commontypes";

const CenteredButton: React.FC<ButtonPropType> = (props) => (
  <div
    className="centered-button"
    style={{
      marginBottom: `${marginScale(props.scale || 1)}px`,
      textAlign: "center",
    }}
  >
    <Button
      link={props.link}
      clName={props.clName}
      clickEvent={props.clickEvent}
      backColor={props.backColor}
      textColor={props.textColor}
      scale={props.scale}
    >
      {props.children}
    </Button>
  </div>
);

const marginScale = (prop: number) => prop * 17;

export default CenteredButton;
