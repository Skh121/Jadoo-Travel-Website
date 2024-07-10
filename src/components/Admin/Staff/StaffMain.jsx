import menuList from "../../../assets/images/menuList.png";
import Order from "./Order";
import searchBtn from "../../../assets/images/searchBtn.png";
import CardLayout from "./Cardlayout";
const StaffMain = () => {
  return (
    <section className="bg-[#FFFBF9] w-[100%] h-[100%] flex flex-col gap-6">
      <div className="flex gap-10 ml-6">
        <img className="w-[40px]" src={menuList} alt="Menu Logo" />
        <h1 className="font-semibold text-2xl">Record Order</h1>
      </div>
      <div className="flex justify-around">
        <div className="w-[700px] bg-white rounded-xl shadow-xl p-2 relative">
          <div className="w-[300px] border-[1px] border-gray-400 rounded-3xl flex absolute left-10 top-8 justify-around">
            <input
              className="px-4 py-[8px] outline-none placeholder-orange-400 rounded-3xl "
              type="text"
              placeholder="Search item"
            />
            <img className="bg-center bg-cover w-[30px] h-[60%] my-auto" src={searchBtn} alt="Search Image" />
          </div>
          <div className="absolute left-10 top-28 bg-orange-400 rounded-xl shadow-xl">
            <CardLayout/>
          </div>
        </div>
        <div>
          <Order />
        </div>
      </div>
    </section>
  );
};
export default StaffMain;
