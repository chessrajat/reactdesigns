import React from "react";
import { Button, Card, Icon, List } from "semantic-ui-react";
import "../pack1.css";

const PricingCard = () => {
  const offerings = [
    "Host Project",
    "Billing",
    "Support",
    "Custom Domain",
    "Dashboard",
  ];
  return (
    <>
      <Card className="p_card">
        <Card.Content className="p_card_content">
          <h2 className="pricing">
            $5 <span className="small_text">/per month</span>
          </h2>
          <Card.Header className="p_card_header">Basic</Card.Header>
          <Card.Meta className="p_card_meta">
            To familiarize yourself with our tools
          </Card.Meta>
          <List>
            {offerings.map((offering, i) => (
              <List.Item className="p_list_item" key={i}>
                <Icon
                  className={i === 1 ? "p_icon_active" : "p_icon"}
                  name="bookmark"
                />{" "}
                {offering}
              </List.Item>
            ))}
          </List>
          <Button className="primary_button">Get Started</Button>
        </Card.Content>
      </Card>
    </>
  );
};

export default PricingCard;
