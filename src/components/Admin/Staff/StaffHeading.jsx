import profileImage from "../../../assets/images/profileImage.png"
const StaffHeading =()=>{
    return (
        <section className="h-[5rem] w-[100%] bg-white flex items-center">
            <div className="w-[80%] mx-auto flex justify-between">
            <div className="flex w-[50%]">
            </div>
            <div className="flex items-center gap-4">
            <div className="w-[45px] rounded-[50%]">
                <img className="w-[100%] bg-cover bg-center" src={profileImage} alt="Profile Image"/>
            </div>
            <h2>Mohan Lal</h2>
            </div>
            </div>
        </section>
    )
}
export default StaffHeading