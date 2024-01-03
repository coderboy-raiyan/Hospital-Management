/* eslint-disable react/prop-types */
function Loader({ styles }) {
  return (
    <div className={`${styles}`}>
      <progress className={`progress w-56`}></progress>
    </div>
  );
}

export default Loader;
