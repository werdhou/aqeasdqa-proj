import MainInfo from "./MainInfo";
import Header from "./Header";
import "./index.scss";
import Close from "./Close";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <MainInfo />
      <Close />
    </div>
  );
};

export default Container;
