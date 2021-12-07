import { useState } from "react";
import { useDispatch } from "react-redux";

import { ModalEdit } from "../index";

import "./index.css";
import { deleteUsers } from "../../redux/country/actions";

const Dropdown = ({ rowSelected, dataUser }) => {
  const dispatch = useDispatch();
  const [isOpenButton, setIsOpenButton] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleClickButton = () => setIsOpenButton((change) => !change);

  const handleRemove = (rowId) => {
    dispatch(deleteUsers(rowId));
  };

  const handleOpenEdit = () => {
    setIsOpenModal(true);
    setIsOpenButton(false);
  };
  const handleClose = () => setIsOpenModal(false);

  return (
    <>
      <div className="dropdown">
        <button onClick={handleClickButton} className="dropdown__button">...</button>
        {
          isOpenButton && (
            <div className="dropdown__open-block">
              <button className="dropdown__remove dropdown__open" onClick={() => handleRemove(rowSelected.original.id)}>delete</button>
              <button className="dropdown__edit dropdown__open" onClick={handleOpenEdit}>edit</button>
            </div>
          )
        }
      </div>

      {isOpenModal && (<ModalEdit isOpenModal={isOpenModal} rowSelected={rowSelected} dataUser={dataUser} handleClose={handleClose} />)}
    </>
  );
};

export default Dropdown;
