import axon from "../../assets/images/axon.png";
import jetstar from "../../assets/images/jetstar.png";
import expedia from "../../assets/images/expedia.png";
import qantas from "../../assets/images/qantas.png";
import alitalia from "../../assets/images/alitalia.png";


const Brand = () => {
  return (
    <section id="brands">
        <img className="brands__axon" src={axon} alt="Axon" />
        <img className="brands__jetstar" src={jetstar} alt="Jetstar" />
        <img className="brands__expedia" src={expedia} alt="Expedia" />
        <img className="brands__qantas" src={qantas} alt="Qantas" />
        <img className="brands__alitalia" src={alitalia} alt="Alitalia" />
      </section>
  )
}

export default Brand