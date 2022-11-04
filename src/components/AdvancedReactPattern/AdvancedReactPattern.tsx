import React from "react";

const Button = (props: any) => {
  const [count, setCount] = React.useState(0);
  return (
    <div
      style={{ color: props.color, textDecoration: props.underline }}
      onClick={() => setCount((i) => i + props.increement)}
    >
      Iam a button with count = {count}
    </div>
  );
};
export default function AdvancedReactPattern() {
  //   const props = {
  //     underline: true,
  //     increament: 2,
  //     color: "black",
  //   };

  //   const obj  = {
  //     x = 1
  //   }
  // React.createElement(component, props, ...children)
  //JSX code -> React.createElement('Button', props: );
  return (
    <div>
      <Button /* {...props} */ color="red" />
      <Button /* {...props} */ color="black" />
      <Button /* {...props} */ color="green" />
    </div>
  );
}
