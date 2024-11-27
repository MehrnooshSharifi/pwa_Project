import HomePageFooter from "./HomePageFooter";
import HomePageHeader from "./HomePageHeader";

const Layout = ({ children }) => {
  return (
    <div className="bg-neutralColor-5 w-full ">
      <HomePageHeader />
      {children}
      <HomePageFooter />
    </div>
  );
};

export default Layout;
