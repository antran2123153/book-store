import "./Title.scss";

const Title = ({ title, text }) => {
  return (
    <div className="title pb-4">
      <div className="title__line"></div>
      <div className="title__heading">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="title__line"></div>
    </div>
  );
};

export default Title;
