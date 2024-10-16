"use client";
import { FC } from "react";
import { Modal, ModalBody } from "reactstrap";

const VideoModal = ({ modal, toggle }) => {
  return (
    <Modal
      modalClassName="video-modal"
      centered
      size="lg"
      fade
      isOpen={modal}
      toggle={toggle}
    >
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={toggle}
        ></div>

        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl mx-auto z-50">
          {/* Close button */}
          <button
            onClick={toggle}
            type="button"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"
          >
            <span className="text-3xl font-bold">&times;</span>
          </button>

          {/* Modal Body */}
          <ModalBody className="p-0">
            <iframe
              className="w-full h-96 md:h-[500px] rounded-b-lg"
              src="https://www.youtube.com/embed/GSKGStAl9VM?si=UTX-F4i4nwGEp9bl"
              allowFullScreen
            ></iframe>
          </ModalBody>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
