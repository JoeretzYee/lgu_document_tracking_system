import React, { useState } from "react";
import {
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  TextInput,
  Select,
} from "flowbite-react";

function ForwardDocumentModal({ open, userProfile, onClose }) {
  const [title, setTitle] = useState("");
  const [forwardTo, setForwardTo] = useState([]);
  return (
    <Modal show={open} size="md" onClose={onClose} popup>
      <ModalHeader />
      <ModalBody>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Forward Document
          </h3>

          {/* Document Title */}
          <div className="mb-2">
            <Label
              htmlFor="documentTitle"
              className="block text-gray-900 dark:text-white"
            >
              Document Title
            </Label>
            <TextInput
              id="documentTitle"
              placeholder="Enter document title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <Label htmlFor="forwardTo">Forward to which Department:</Label>
            <Select
              id="forwardTo"
              value={forwardTo}
              onChange={(e) => {
                const selected = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                setForwardTo(selected);
              }}
              multiple
            >
              <option value="" disabled selected>
                Select Department
              </option>
              <option value="Mayors">Mayors</option>
              <option value="Youth/Info">Youth/Info</option>
              <option value="Accounting">Accounting</option>
              <option value="Treasury">Treasury</option>
              <option value="BPLO">Bplo</option>
              <option value="Budget">Budget</option>
              <option value="Assesor">Assesor</option>
              <option value="MHO">MHO</option>
              <option value="Magro">Magro</option>
              <option value="Registrar">Registrar</option>
              <option value="MPDC">MPDC</option>
              <option value="HR">HR</option>
              <option value="MSWD">MSWD</option>
              <option value="BAC">BAC</option>
              <option value="Comelec">Comelec</option>
              <option value="GSO">GSO</option>
              <option value="NERT">NERT</option>
              <option value="Housing">Housing</option>
              <option value="SB">SB</option>
            </Select>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-2">
            <Button color="gray" onClick={onClose}>
              Cancel
            </Button>
            <Button color="green" onClick={onClose}>
              Forward
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ForwardDocumentModal;
