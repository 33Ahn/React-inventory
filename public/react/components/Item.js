import React from "react";
import { ItemDetails } from "./ItemDetails";
import apiURL from "../api";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Item = (props) => {
  //see wikiverse Page.Js line 16 for reference
  return (
    <>
      <div className="d-flex justify-content-center ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.item.image} />
          <Card.Body>
            <Card.Title>{props.item.title}</Card.Title>
            <Card.Text>{props.item.description}</Card.Text>
            <Button
              variant="primary"
              onClick={() => props.fetchItem(props.item.id)}
            >
              View Item Details
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
