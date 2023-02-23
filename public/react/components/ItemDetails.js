import React,{useState} from 'react';
import { Item } from "./Item";
import {Edit} from "./Update"
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export const ItemDetails = ({ item, setItemDetails, fetchItems}) => {
  
  const [displayEdit, setDisplayEdit] = useState(false)

  //delete handler
  const handleDelete = async () => {
    try {
      const response = await fetch(`${apiURL}/items/${item.id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setItemDetails(null);
    } catch (err) {
      console.log("An error has occurred!", err);
    }
  };

    // update handler
    const handleUpdate = async () => {
      try {
        const response = await fetch(`${apiURL}/items/${item.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            price,
            category,
            image,
          }),
        });
        const data = await response.json();
        setItemDetails({ id: `${item.id}` });
      } catch (err) {
        console.log("An error has occurred!", err);
      }
    };

    return (
      <>
          {displayEdit ? (
              <Edit setDisplayEdit={setDisplayEdit} setItemDetails={setItemDetails}fetchItems={fetchItems} />
          ) : (<>
                 {/* <div className="d-flex justify-content-between "> */}
         <Card style={{ width: "18rem" }}>
           <Card.Img variant="top" src={item.image} />
           <Card.Body>
             <Card.Title>{item.title}</Card.Title>
             <Card.Text>{item.description}</Card.Text>
          </Card.Body>
           <ListGroup className="list-group-flush">
            <ListGroup.Item>{item.category}</ListGroup.Item>
            <ListGroup.Item>Price:${item.price}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button onClick={handleDelete} variant="danger">
               Delete
             </Button>
             <br></br>
             <Button variant="success" onClick={()=>setDisplayEdit(true)}>Update</Button>
           </Card.Body>
         </Card>

           <Button variant="primary" onClick={() => setItemDetails(null)}>
             Back to All Items
           </Button>
          </>)}
      </>
  )
}


















//     return (
//       <>
//           {displayEdit ? (
//               <Edit setDisplayEdit={setDisplayEdit} displayPage={displayPage} fetchPages={fetchPages} setDisplayPage={setDisplayPage}/>
//           ) : (<>
//         <div className="d-flex justify-content-between ">
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={item.image} />
//           <Card.Body>
//             <Card.Title>{item.title}</Card.Title>
//             <Card.Text>{item.description}</Card.Text>
//           </Card.Body>
//           <ListGroup className="list-group-flush">
//             <ListGroup.Item>{item.category}</ListGroup.Item>
//             <ListGroup.Item>Price:${item.price}</ListGroup.Item>
//           </ListGroup>
//           <Card.Body>
//             <Button onClick={handleDelete} variant="danger">
//               Delete
//             </Button>
//             <br></br>
//             <Button variant="success" onClick={()=>setDisplayEdit(true)}>Update</Button>
//           </Card.Body>
//         </Card>
//         <div>
//           <Button variant="primary" onClick={() => setItemDetails(null)}>
//             Back to All Items
//           </Button> 
//           </>)}
//       </>
//   )
// }