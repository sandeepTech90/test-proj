import { Button, Form, Input } from "antd"
import FormItem from "antd/es/form/FormItem"

const CreateItemForm = ({form , onFinish}) => {

    return <Form form={form} title="Create Item" onFinish={onFinish}>
        <FormItem label="Title" name="title">
            <Input />
        </FormItem>
        <FormItem label="Desc" name="body">
            <Input />
        </FormItem>
        <Button htmlType="submit" >Add</Button>
    </Form>
}

export default CreateItemForm;