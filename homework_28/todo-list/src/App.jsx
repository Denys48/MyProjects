import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (data) => {
    const newTodo = {
      id: uuidv4(),
      completed: false,
      ...data
    };
    setTodos(oldData => [newTodo, ...oldData]);
  };

  const toggleTodo = (id) => {
    setTodos(oldData =>
      oldData.map(todo =>
        todo.id === id? { ...todo, completed: !todo.completed }: todo
      )
    );
  };

  const sortedTodos = [...todos].sort(
    (a, b) => a.completed - b.completed
  );

  return (
    <Container>
      <Row>
         <Col xs={4}>
          <TodoForm onSubmit={handleSubmit}/>
         </Col>
         <Col xs={8}>
         <ListGroup>
            {sortedTodos.map(todo => (
                <ListGroup.Item key={todo.id} className={todo.completed ? "text-decoration-line-through text-muted" : ""}>
                  <Form.Check
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="me-3"
                  />
                  {todo.title} - {todo.description}
                </ListGroup.Item>
            ))}
         </ListGroup>
         </Col>
      </Row>
    </Container>
  );
}

export default App;