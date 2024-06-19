import React from "react";

export default function BoilingVerdict(props: any) {
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
