import React, { useEffect, useState } from "react";
import { Button, TextField, Switch } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";

const AddContactModal = ({
  isOpen = false,
  size = "md",
  handleClose = () => {},
  isCentered = true,
  backdrop = "static",
  isEditContact = false,
  contactData = {},
  onSuccess = () => {},
}) => {
  const [disableSegmentInput, setDisableSegmentInput] = useState(true);
  const [formData, setFormData] = useState({ ...contactData });
  const [isError, setError] = useState(false);

  const onAddContactClick = () => {
    if (
      formData.first_name &&
      formData.last_name &&
      formData.email &&
      formData.phone_number
    ) {
      setError(false);
      onSuccess(formData);
      handleClose();
    } else {
      setError(true);
    }
  };

  const onChangeField = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const onSwitchChange = (e) => {
    setFormData({
      ...formData,
      status: e.target.checked ? "active" : "inactive",
    });
  };

  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      size={size}
      backdrop={backdrop}
      centered={isCentered}
      className="contact-modal-root"
    >
      <Modal.Header>
        <div>
          <h6>{isEditContact ? "Edit Contact" : "Add Contact"}</h6>
        </div>
        <div
          style={{ float: "right", cursor: "pointer" }}
          onClick={handleClose}
        >
          <CloseIcon />
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="form-contents-cs">
          <TextField
            label="First Name"
            fullWidth
            value={formData.first_name}
            onChange={(e) => onChangeField(e, "first_name")}
          />
          <TextField
            label="Last Name"
            fullWidth
            value={formData.last_name}
            onChange={(e) => onChangeField(e, "last_name")}
          />
          <TextField
            label="Email Id"
            fullWidth
            value={formData.email}
            onChange={(e) => onChangeField(e, "email")}
          />
          <TextField
            label="Phone Number"
            fullWidth
            value={formData.phone_number}
            type="number"
            onChange={(e) => onChangeField(e, "phone_number")}
          />
          <div className="table-switch-column">
            Inactive
            <Switch
              checked={formData.status === "active"}
              onChange={onSwitchChange}
            />
            Active
          </div>
        </div>
        {isError && (
          <div className="add-contact-error">*Required all fields</div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onAddContactClick}>
          {isEditContact ? "Update Contact" : "Add Contact"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddContactModal;
