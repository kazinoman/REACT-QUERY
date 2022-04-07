import React from "react";

// const HOC =
//   (WrapperComponent) =>
//   ({ ...props }) => {
//     console.log("Hoc compoent is called");
//     const { name } = props;
//     return (
//       <div>
//         <h2>Hoc COM</h2>
//         <WrapperComponent name={name} />;
//       </div>
//     );
//   };
//   return class extends React.Component {
//     render() {
//       return (
//         <div>
//           <p>Hoc compoent</p>
//           <WrapperComponent />
//         </div>
//       );
//     }
//   };

const HOC = (WrapperComponent) => {
  return function ({ ...props }) {
    console.log("Hoc compoent is called");
    const { name } = props;
    return (
      <div>
        <h2>Hoc COM</h2>
        <WrapperComponent name={name} />;
      </div>
    );
  };
};

export default HOC;
