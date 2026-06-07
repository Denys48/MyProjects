import { Form } from "react-bootstrap";

const Input = ({
    name,
    label, 
    placeholder="Enter something",
    type="text",
    className,
    value,
    onChange
}) => {
        const InputComponent = (type) => {
            const propsForInput = {type, name, placeholder, value, onChange};

            if(type!=="textarea"){
                propsForInput.type = type;
            } 
            else {
                propsForInput.as = "textarea";
                propsForInput.rows = 3;
            }  
            return <Form.Control {...propsForInput} />
        }
    

        return (
            <Form.Group className={className} controlId={"control" + name}>
                <Form.Label>{label}</Form.Label>
                {InputComponent(type)}
            </Form.Group>
        );
};

export default Input;