import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { Switch } from "@material-ui/core";
import AddContactModal from "./AddContactModal";

const LastChildComponent = ({ row, onSuccess, onDelete }) => {
  const [isContactModalOpen, setContactModal] = useState(false);

  const onEditContactClick = () => {
    setContactModal(true);
  };

  const onHideContactModal = () => {
    setContactModal(false);
  };

  return (
    <>
      <TableCell align="center" className="table-last-column">
        <div>
          <EditOutlinedIcon onClick={onEditContactClick} />
        </div>
        <div>
          <DeleteOutlineOutlinedIcon onClick={() => onDelete(row)} />
        </div>
      </TableCell>
      <AddContactModal
        isOpen={isContactModalOpen}
        contactData={row}
        handleClose={onHideContactModal}
        isEditContact={true}
        onSuccess={onSuccess}
      />
    </>
  );
};

const TableComponent = ({
  tableData = [],
  tableHeaderData = [],
  onStatusChange = () => {},
  onSuccess = () => {},
  onDelete = () => {},
}) => {
  return (
    <TableContainer component={Paper} className="table-root">
      <Table>
        <TableHead>
          <TableRow>
            {tableHeaderData.map((item) => (
              <TableCell align="center" key={item}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((rowData) => (
            <TableRow key={rowData.id}>
              <TableCell component="th" scope="row" align="center">
                {rowData.first_name}
              </TableCell>
              <TableCell align="center">{rowData.last_name}</TableCell>
              <TableCell align="center">{rowData.email}</TableCell>
              <TableCell align="center">{rowData.phone_number}</TableCell>
              <TableCell align="center" className="table-switch-column">
                Inactive
                <Switch
                  checked={rowData.status === "active"}
                  onChange={() => onStatusChange(rowData)}
                />
                Active
              </TableCell>
              <LastChildComponent
                row={rowData}
                onSuccess={(r) => onSuccess(r, "updated_contact")}
                onDelete={onDelete}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
