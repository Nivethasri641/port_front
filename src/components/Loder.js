import "./Styles/Loder.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <h1 className="loader-name">
        Nivethasri <span>K</span>
      </h1>
      <p className="loader-text">Loading portfolio</p>
      <div className="loader-bar">
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
