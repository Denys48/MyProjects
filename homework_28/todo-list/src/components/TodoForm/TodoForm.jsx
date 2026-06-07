import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Input from "../FormComponents/Input";
import { inputs, initialState } from "./formConfig";
import { useState } from "react";

const TodoForm = ({onSubmit}) => {

    const [data, setData] = useState(initialState);
    const [canSubmit, setCanSubmit] = useState(false);
    
    const handleChange = (e) => {
        const dataCopy = {...data};
        dataCopy[e.target.name] = e.target.value;
        setData(dataCopy);

        const shouldSubmit = Object.keys(dataCopy).reduce((acc, key) => {
            if (dataCopy[key].trim() === "") {
                return false;
            }
            return acc;
        }, true);
        setCanSubmit(shouldSubmit);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!canSubmit) return;
        onSubmit(data);
        setData({...initialState});
        setCanSubmit(false);
    }

    return (
        <div>
            <h2>Todo Form</h2>
            <hr />
            <Form onSubmit={handleSubmit}>
            {inputs.map(input => (
                <Input 
                    key={input.id}
                    name={input.name}
                    label={input.label}
                    placeholder={input.placeholder}
                    type={input.type}
                    className={input.className}
                    value={data[input.name]}
                    onChange={handleChange}
                />
            ))}
            <Button type="submit" disabled={!canSubmit}>
                Add Task
            </Button>
            </Form>
        </div>
    )
}

export default TodoForm;