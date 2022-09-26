// import ButtonBar from "../ButtonBar/ButtonBar";
import AskQuestions from "../AskQuestions/AskQuestions";
import "./EducationRead.scss";

function EducationRead({ toggleClass }) {
  return (
    <div className={toggleClass}>
      <section className="educationRead">
        <AskQuestions />
        {/* <h2 className="educationRead__header">What is E-waste?</h2>
        <div className="educationRead__div">
          <p className="educationRead__text">
            E-waste is any electrical or electronic equipment that’s been
            discarded. This includes working and broken items that are thrown in
            the garbage or donated to a charity reseller like Goodwill. Often,
            if the item goes unsold in the store, it will be thrown away.
            E-waste is particularly dangerous due to toxic chemicals that
            naturally leach from the metals inside when buried.
          </p>
        </div>
        <h2 className="educationRead__header">
          Does e-waste hide toxic material?
        </h2>
        <div className="educationRead__div">
          <p className="educationRead__text">
            While above ground, modern electronics are safe to use and be
            around. However, most electronics contain some form of toxic
            materials, including beryllium, cadmium, mercury, and lead, which
            pose serious environmental risks to our soil, water, air, and
            wildlife. When E-waste gets buried at a landfill, it can dissolve in
            microscopic traces into the gross sludge that permeates at the
            landfill. Eventually, these traces of toxic materials pool into the
            ground below the landfill. This is known as leaching. The more
            E-waste and metals at the landfill, the more of these trace toxic
            materials show up in the groundwater.
          </p>
        </div> */}
      </section>
    </div>
  );
}
export default EducationRead;
