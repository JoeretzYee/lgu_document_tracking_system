import React from "react";
import {
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  TextInput,
} from "flowbite-react";

function ForwardDocumentModal({ open, onClose }) {
  return (
    <Modal show={open} size="md" onClose={onClose} popup>
      <ModalHeader />
      <ModalBody>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Forward Document
          </h3>

          <div>
            <Label htmlFor="title" value="Document Title" />
            <TextInput id="title" placeholder="Enter title" required />
          </div>

          <div>
            <Label htmlFor="department" value="Forward To Department" />
            <TextInput id="department" placeholder="Enter department" required />
          </div>

          <div className="flex  justify-end space-x-2">
            <Button color="gray" onClick={onClose}>
              Cancel
            </Button>
            <Button color='green' onClick={onClose}>Forward</Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ForwardDocumentModal;
