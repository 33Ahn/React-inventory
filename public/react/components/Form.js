import React,{useState} from 'react';
import apiURL from '../api';
//BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Form1 = () => {
	const [title, setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [price, setPrice] = useState(''); //do i make this a number?
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const itemsData = {
        title,
        description,
        price,
        category,
        image 
      };

      const handleSubmit= async () =>{
      const response = await fetch(`${apiURL}/items`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                itemsData // our data TO CREATE here
            )
        });
        const data = await response.json();
    }

	return (<>

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Item Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control  onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder="Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Control  onChange={(e) => setCategory(e.target.value)} value={category} type="text" placeholder="Category" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control  onChange={(e) => setImage(e.target.value)} value={image} type="text" placeholder="Image" />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit New Item
      </Button>
    </Form>
		
       
		
	</>)
} 