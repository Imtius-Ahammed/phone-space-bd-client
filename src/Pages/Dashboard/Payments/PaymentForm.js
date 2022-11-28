import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PaymentForm = ({ orders }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const { price, email, name, _id } = orders;

  useEffect(() => {
    fetch("https://phone-space-bd-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);

      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        ordersId: _id,
      };
      fetch("https://phone-space-bd-server.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            setSuccess("Payment Complete Successfully");
            setTransactionId(paymentIntent.id);
            toast.success("Succesfully paid");
          }
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <form
        className="  bg-blue-300 lg:w-[600px] lg:h-[600px] p-4"
        onSubmit={handleSubmit}
      >
        <div>
          <img
            src="https://merchant.razer.com/v3/wp-content/uploads/2018/03/ways-using-virtual-payments-0.jpg"
            alt=""
          />
        </div>
        <CardElement
          className=" p-6 bg-sky-300 hover:shadow-lg hover:shadow-orange-300 shadow-lg shadow-sky-400 border-black "
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "black",
                "::placeholder": {
                  color: "white",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center ">
          <button
            className="btn w-40 text-2xl hover:bg-orange-300 font-bold my-12  btn-info"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-600 mt-5 font-bold text-2xl">{success}</p>
          <p>
            Your transactionId:{" "}
            <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
