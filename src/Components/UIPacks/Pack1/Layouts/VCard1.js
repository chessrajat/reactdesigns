import React from "react";
import { Button, Card } from "semantic-ui-react";

const VCard1 = () => {
  return (
    <>
      <Card className="v1_card">
        <Card.Content className="v1_card_content">
          <Card.Header style={{ color: "white" }}>
            10 Life Skills if you decide to move to Thailand
          </Card.Header>
          <Button className="primary_button v1_button">Show Tutorial</Button>
        </Card.Content>
      </Card>
    </>
  );
};

export default VCard1;
