import { useState } from "react";
import CamperList from "../../componets/CamperList/CamperList";
import Filter from "../../componets/Filter/Filter";
import Modal from "../../componets/Modal/Modal";
import CSS from "./Rental.module.css";
const Rental = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  const toggleModal = (camper) => {
    setSelectedCamper(camper);
    setShowModal(!showModal);
  };
  return (
    <div className={CSS.rentalContainer}>
      <Filter />
      <CamperList toggleModal={toggleModal} />
      {showModal && <Modal camper={selectedCamper} />}
    </div>
  );
};

export default Rental;
