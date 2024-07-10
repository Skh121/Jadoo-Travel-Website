import building from "../../../assets/images/building.png"
const CardLayout =()=>{
    return (
        <div className="w-[150px] h-[210px] flex flex-col justify-center">
            <div className="w-[80%] mx-auto">
                <img className="w-[100%] bg-center bg-cover" src={building} alt="Building Image"/>
            </div>
            <div className="w-[80%] mx-auto">
                <h5 className="text-center text-white">Crispy Chicken Burger</h5>
                <p className="text-center text-white">Rs 149</p>
            </div>
        </div>
    )
}
export default CardLayout