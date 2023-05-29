import React from "react";
import FormLayout from "../MainFormLayout/FormLayout";
import classes from "../styles/Payment.module.css";
import Button from "../Button";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");
function Payment() {
  const customStyles = {
    content: {
      width: "82%",
      height: "95%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div id="root">
      <FormLayout>
        <h1 className={classes.form_heading}>
          কনসার্ট দেখার জন্য এখনি পেমেন্ট করুন
        </h1>

        <Button
          text={"পেমেন্ট"}
          onClick={openModal}
          className={classes.btn_margin}
        />
        <div>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <iframe
              src="https://shop.bkash.com/book-forest01317495728/pay/bdt10/Gfrrgs"
              frameBorder="0"
              width="100%"
              height="100%"
              content="cover"
              // overflow="hidden"
              overflow="auto"
            ></iframe>
            <Link to="/login">
              <Button
                style={{ marginTop: "50px", width: "100%" }}
                onClick={closeModal}
                text={"লগ ইন করুন"}
              />
            </Link>
          </Modal>
        </div>
      </FormLayout>
    </div>
  );
}

export default Payment;
