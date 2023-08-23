import { useAtomValue, useSetAtom } from "jotai";
import { cardNumber, paymentSystem } from "../atoms/atoms";
import { useEffect } from "react";

export default function useCardNumberHandler() {
  const cardNumberValue = useAtomValue(cardNumber);
  const setCardNumber = useSetAtom(cardNumber);
  const setPaymentSystem = useSetAtom(paymentSystem);
  const paymentSystemValue = useAtomValue(paymentSystem);

  function cardNumberHandler(event: React.FormEvent<HTMLInputElement>) {
    document.addEventListener("keydown", function (event) {
      if (
        document.activeElement?.id == "number" &&
        cardNumberValue.length <= 19 &&
        event.code == "Backspace"
      ) {
        setCardNumber("");
      } else {
        return;
      }
    });

    if (cardNumberValue.length == 19) {
      return;
    }

    if (event.currentTarget.value.match(/^[\d ]+$/)) {
      setCardNumber(event.currentTarget.value);
    } else {
      console.log("not a number");
    }

    if (
      cardNumberValue.length == 4 ||
      cardNumberValue.length == 9 ||
      cardNumberValue.length == 14
    ) {
      setCardNumber(cardNumberValue.concat(" "));
    }
  }
  function checkPaymentSystem() {
    if (cardNumberValue[0] == "4") {
      setPaymentSystem("/visa-logo.png");
    }
    if (cardNumberValue[0] == "5") {
      setPaymentSystem("/mastercard-logo.png");
    }
    if (cardNumberValue[0] == "2") {
      setPaymentSystem("/mir-logo.png");
    }
    if (cardNumberValue.length == 0) {
      setPaymentSystem("");
    }
  }
  useEffect(() => {
    checkPaymentSystem();
    console.log(paymentSystemValue);
  }, [cardNumberValue]);
  return { cardNumberValue, cardNumberHandler, paymentSystemValue };
}
