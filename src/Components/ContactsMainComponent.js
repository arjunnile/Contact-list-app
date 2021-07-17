import React, { useState } from "react";
import Header from "./Header";
import { Container, Grid, Button } from "@material-ui/core";
import "./main.css";
import TableComponent from "./TableComponent";
import { tableData, tableHeader } from "./Constants";
import AddContactModal from "./AddContactModal";

const ContactsMainComponent = () => {
  const [tableListData, setTableListData] = useState(tableData);
  const [isContactModalOpen, setContactModal] = useState(false);

  const onAddContactClick = () => {
    setContactModal(true);
  };

  const onHideContactModal = () => {
    setContactModal(false);
  };

  const onStatusChange = (row) => {
    if (row.status === "active") {
      row.status = "inactive";
    } else {
      row.status = "active";
    }

    let tableData = tableListData.map((item) =>
      item.id === row.id ? { ...row } : item
    );

    setTableListData(tableData);
  };

  const onUpdateContact = (row, updatedContact) => {
    if (updatedContact === "updated_contact") {
      // Updated contact
      let tableData = tableListData.map((item) =>
        item.id === row.id ? { ...row } : item
      );

      setTableListData(tableData);
    } else {
      // Add new contact
      let tableData = [
        { ...row, id: tableListData.length + 1 },
        ...tableListData,
      ];
      setTableListData(tableData);
    }
  };

  const onDeleteContact = (row) => {
    let tableData = tableListData.filter((item) => item.id !== row.id);

    setTableListData(tableData);
  };

  return (
    <div className="contact-app">
      <Header />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} className="app-title-row">
            <div className="title">Contact List</div>
            <div className="add-contact-button">
              <Button variant="contained" onClick={onAddContactClick}>
                Add Contact
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TableComponent
              tableData={tableListData}
              tableHeaderData={tableHeader}
              onStatusChange={onStatusChange}
              onSuccess={onUpdateContact}
              onDelete={onDeleteContact}
            />
          </Grid>
        </Grid>
      </Container>
      <AddContactModal
        isOpen={isContactModalOpen}
        handleClose={onHideContactModal}
        onSuccess={onUpdateContact}
      />
    </div>
  );
};

export default ContactsMainComponent;
