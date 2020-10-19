interface BoxShadowCardPropType {
  clName?: string;
  disabled?: boolean;
  cardStyle?: any;
  children?: any;
}

const BoxShadowCard: React.FC<BoxShadowCardPropType> = (props) => (
  <>
    <div
      className={`box-shadow-card ${props.clName || ""} ${
        props.disabled ? "disabled" : ""
      } `}
      style={props.cardStyle || null}
    >
      {props.children}
    </div>
    <style jsx>{`
      .box-shadow-card {
        display: inline-block;
        padding: 2%;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);

        &.top-elements__sample-card {
          display: flex;
          justify-content: space-around;
          margin: 0 2%;

          > * {
            width: 40%;
            margin: 0 2%;
          }
        }
      }
      .box-shadow-card.disabled {
        background: rgba(0, 0, 0, 0.3);
      }
      .landing-package-card {
        margin-right: 2%;
      }
    `}</style>
  </>
);

export default BoxShadowCard;
