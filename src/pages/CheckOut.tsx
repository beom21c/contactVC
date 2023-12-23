import { useEffect, useRef, useState } from "react";
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
  ANONYMOUS,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next/router';

// TODO: clientKey는 개발자센터의 결제위젯 연동 키 > 클라이언트 키로 바꾸세요.
// TODO: customerKey는 구매자와 1:1 관계로 무작위한 고유값을 생성하세요.
// @docs https://docs.tosspayments.com/reference/using-api/api-keys
const clientKey = "test_ck_GjLJoQ1aVZaO5xMNYq4d3w6KYe2R";
const customerKey = nanoid();

export default function CheckOut() {
  const { data: paymentWidget } = usePaymentWidget(clientKey, customerKey);
  // const { data: paymentWidget } = usePaymentWidget(clientKey, ANONYMOUS); // 비회원 결제
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);
  const agreementsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderAgreement"]
  > | null>(null);
  const [price, setPrice] = useState(50_000);
  const [title, setTitle] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { price, title } = router.query;
      setPrice(price);
      setTitle(title);
    }
  }, [router]);

  useEffect(() => {
    if (paymentWidget == null) {
      return;
    }

    // ------  결제위젯 렌더링 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      "#payment-widget",
      { value: price },
      { variantKey: "DEFAULT" }
    );

    paymentMethodsWidgetRef.current = paymentMethodsWidget;

    // ------  이용약관 렌더링 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
    paymentWidget.renderAgreement("#agreement", {
      variantKey: "AGREEMENT",
    });
  }, [paymentWidget]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    // ------ 금액 업데이트 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
    paymentMethodsWidget.updateAmount(price);
  }, [price]);


  async function payments() {
    try {
      // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
      // @docs https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: title,
        customerName: "김토스",
        customerEmail: "customer123@gmail.com",
        customerMobilePhone: "01012341234",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (error) {
      // 에러 처리하기
      console.error(error);
    }
  }
  return (
    <main>
      <div className="wrapper">
        <div className="box_section">
          <div id="payment-widget" style={{ width: "100%" }} />
          <div id="agreement" style={{ width: "100%" }} />
          <div className="result wrapper">
            <div style={{ height : 68, backgroundColor : '#4181A0', display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', color : 'white', fontSize : 20,
              width : '80%',
              borderRadius : 3,
              margin : '0px auto',
              cursor : 'pointer'}} onClick={payments}>결제하기</div>
          </div>
        </div>
      </div>
    </main>
  );
}

function usePaymentWidget(clientKey: string, customerKey: string) {
  return useQuery({
    queryKey: ["payment-widget", clientKey, customerKey],
    queryFn: () => {
      // ------  결제위젯 초기화 ------
      // @docs https://docs.tosspayments.com/reference/widget-sdk#sdk-설치-및-초기화
      return loadPaymentWidget(clientKey, customerKey);
    },
  });
}
