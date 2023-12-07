import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Form, Modal } from "antd";
import CreateItemForm from "./CreateItemForm";
import EditForm from "./EditFOrm";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate()
  const [selected, setSelected] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false)

  const [id, setId] = useState(1000);
  const [formRef] = Form.useForm()
  const [editFOrm] = Form.useForm()

  const getItemList = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res);
      });
  };

  useEffect(() => {
    getItemList();
  }, []);

  const deleteItem  = (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const createItem= () => {
    const values = formRef.getFieldsValue();
    setItems(prev => {
      setId(prev => prev+1)
      return [...prev, {...values, id}]
    })
    setOpenModal(false)
}

const editItem = (id) => {
  const values = editFOrm.getFieldsValue();
  setItems(prev => prev.map(item => {
    if(item.id === id){
      return {...item, ...values}
    }
    return item
  }))
  setOpenEditModal(false)
  editFOrm.resetFields()
}




  return (
    <div style={{display: "flex", gap: "50px"}}>

    <div style={{height: "90vh", overflow: "scroll"}}>
      {items.map((i) => (
        <div
        key={i.id}
          style={{
            marginBlock: "10px",
            border: "1px solid black",
            padding: "5px",
            cursor: "pointer"
          }}
          onClick={() => setSelected(i)}
        >
          <span>{i.title}</span><span><button onClick={(e) => {
            e.stopPropagation();
            deleteItem(i.id)
          }}>Del</button></span><span><button onClick={(e) => {
            setOpenEditModal(true)
            setSelected(i)
          }}>Edit</button></span>
        </div>
      ))}
    </div>
    <ItemDetail item={selected}/>
    <button style={{height: "50px"}} onClick={() => setOpenModal(true)}>Create</button>
    
    <button style={{height: "50px"}} onClick={() => navigate("/counter")}>Go to Counter</button>

    <Modal open={openModal} closable={true} onCancel={() => setOpenModal(false)} footer={null} destroyOnClose>
      <CreateItemForm form={formRef} onFinish={createItem}/>
    </Modal>

    <Modal open={openEditModal} closable={true} onCancel={() => setOpenEditModal(false)} footer={null} destroyOnClose>
      <EditForm form={editFOrm} onFinish={() => editItem(selected.id)} selected={selected}/>
    </Modal>
    </div>
  );
};

export default ItemList;
