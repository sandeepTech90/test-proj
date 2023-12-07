import { Button, Form, Input } from "antd"
import FormItem from "antd/es/form/FormItem"
import { useEffect } from "react";

const EditForm = ({form, onFinish, selected}) => {
    console.log(selected);
    useEffect(()=> {
        console.log("mounted");
    })

    return <Form form={form} title="Create Item" onFinish={onFinish} initialValues={{...selected}}>
        <FormItem label="Title" name="title">
            <Input />
        </FormItem>
        <FormItem label="Desc" name="body">
            <Input />
        </FormItem>
        <Button htmlType="submit" >Update</Button>
    </Form>
}

export default EditForm;