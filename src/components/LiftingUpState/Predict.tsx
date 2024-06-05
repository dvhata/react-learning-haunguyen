import React from "react";

export default function Predict(props: any) {
  const { temperature } = props;
  return (
    <>
      {temperature > 0 ? (
        <div>The water is boiled</div>
      ) : (
        <div>NOT boiled yet</div>
      )}
    </>
  );
}
