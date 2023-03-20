// import React from 'react';

// function UsernameTextField(props) {
//   return (
//     <div>
//       <form>
//         <input type="text" value={props.value} placeholder="Username" className="login-field" onChange={props.onChange} />
//       </form>
//     </div>
//   );
// }

// export default UsernameTextField;



import React from 'react';

function UsernameTextField(props) {
  return (
    <div>
     
      <input type="text" id="inputField" value={props.inputValue} onChange={props.handleInputChange} />
    </div>
  );
}

export default UsernameTextField;











// import React, { useRef } from "react";


// function Username_textfield({ onUsernameChange }) {
//   const myElementRef = useRef(null);

//   function handleUsernameChange() {
//     const inputValue = myElementRef.current.value;
//     onUsernameChange(inputValue);
//   }

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           placeholder="Username"
//           className="login-field"
//           ref={myElementRef}
//           onChange={handleUsernameChange}
//         />
//       </form>
//     </div>
//   );
// }

// export default Username_textfield;

// import React from "react";

// const Username_button=(props)=> {



  
//     return(
//       <div>
//         <form>
//             <input type="text" value={props.info}  placeholder="Username" className="login-field"/>
//         </form>
//       </div>
//     );
  
// }

// export default Username_button;
  