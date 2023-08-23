export default function EnteringInformationBlock(props: {
  title: string;
  inputHandler: any;
  value: string;
  paymentSystem: string;
  elemId: string;
}) {
  return (
    <div className="entering-information-block">
      <h2 className="entering-information-block__title title">{props.title}</h2>
      <div className="input-section">
        <input
          className="entering-information-block_input"
          onInput={props.inputHandler}
          type="text"
          id={props.elemId}
          value={props.value}
        ></input>
        {props.paymentSystem && <img src={props.paymentSystem}></img>}
        {/* <p>{props.paymentSystem}</p> */}
      </div>
    </div>
  );
}
