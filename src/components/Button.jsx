// import React from 'react';

// function Button({ name, isBeam = false, containerClass, href = null, onClick }) {
//   const buttonContent = (
//     <>
//     {isBeam && (
//        <span className="relative flex h-3 w-3">
//        <span className="btn-ping" />
//        <span className="btn-ping_dot" />
//      </span>
//     )}
//     {name}
//     </>
//   )

//   return href ? (
//     <a href="href" className={`btn ${containerClass}`}>{buttonContent}</a>
//   ) : (
//     <button className={`btn ${containerClass}`} onClick={onClick}>
//       {buttonContent}
//     </button>
//   );
// }

// export default Button;

import React from 'react';

function Button({ name, isBeam = false, containerClass, href = null, onClick }) {
  const buttonContent = (
    <>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </>
  );

  return href ? (
    <a href={href} className={`btn ${containerClass}`}>
      {buttonContent}
    </a>
  ) : (
    <button className={`btn ${containerClass}`} onClick={onClick}>
      {buttonContent}
    </button>
  );
}

export default Button;
