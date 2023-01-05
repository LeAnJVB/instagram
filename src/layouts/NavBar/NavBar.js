/* eslint-disable jsx-a11y/alt-text */
import Instagram_Logo from "../../assets/images/Instagram_Logo.png";

function NavBar() {
  return (
    <div className="flex w-[244px] h-screen">
      <div className="w-[220px] mx-auto  pt-8 pr-12 pl-12 pb-20 bg-orange-200">
        <div></div>
        <div className="w-[196px]">
          <img className="w-[100px]" src={Instagram_Logo} />
        </div>
        <div className="">
          <div className="block">
            <div className="block w-[24px]"></div>
            <div className="pl-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
