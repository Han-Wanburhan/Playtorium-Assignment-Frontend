import Header from "../components/header/Header";
import BestSeller from "../components/bestseller/BestSell";

const Home = () => {
  // localStorage.setItem("CustomerID", 1);
  // localStorage.setItem("CustomerID", 2);
  // localStorage.setItem("CustomerID", 3);
  localStorage.setItem("CustomerID", 4);
  return (
    <div className="font-NotoThai">
      <Header />
      <BestSeller />
    </div>
  );
};
export default Home;
