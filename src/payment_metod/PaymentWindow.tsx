import Button from "./Button";
import { X } from "@phosphor-icons/react";

import EnteringInformationBlock from "./EnteringInformationBlock";
import useCardHolderHandler from "./functions/useCardHolderHandler";
import useCardNumberHandler from "./functions/useCardNumberHandler";
import useExpirationCardHandler from "./functions/useExpirationCardHandler";
import useCvcCardHandler from "./functions/useCvcCardHandler";

export default function PaymentWindow() {
  const cardHolder = useCardHolderHandler();
  const cardNumber = useCardNumberHandler();
  const expirationCard = useExpirationCardHandler();
  const cvcCard = useCvcCardHandler();
  const elemId = ["holder", "number", "exp", "cvc"];

  return (
    <div className="form">
      <div className="form__header-section">
        <h1 className="form__header-section__title">Edit payment method</h1>
        <X className="form__header-section__closer" />
      </div>
      <EnteringInformationBlock
        title={"card holder*"}
        inputHandler={cardHolder.cardHolderHandler}
        value={cardHolder.cardHolderValue}
        paymentSystem={""}
        elemId={elemId[0]}
      />
      <EnteringInformationBlock
        title={"credit/debit card number*"}
        inputHandler={cardNumber.cardNumberHandler}
        value={cardNumber.cardNumberValue}
        paymentSystem={cardNumber.paymentSystemValue}
        elemId={elemId[1]}
      />
      <div className="private-card-information">
        <EnteringInformationBlock
          title={"expiration month and year*"}
          inputHandler={expirationCard.expirationCardHandler}
          value={expirationCard.expirationCardValue}
          paymentSystem={""}
          elemId={elemId[2]}
        />
        <EnteringInformationBlock
          title={"cvc*"}
          inputHandler={cvcCard.cvcCardHandler}
          value={cvcCard.cvcCardValue}
          paymentSystem={""}
          elemId={elemId[3]}
        />
      </div>
      <div className="form__footer-section">
        <h2 className="title">*This filed is mandatory</h2>
        <div className="button-section">
          <Button buttonText={"Cancel"} />
          <Button buttonText={"Update"} />
        </div>
      </div>
      {/* {<p>{cardNumber.paymentSystemValue}</p>} */}
    </div>
  );
}
