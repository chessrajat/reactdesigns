import React from "react";
import { Button, Card, Grid, Icon, Image } from "semantic-ui-react";

const VCard2 = () => {
  return (
    <>
      <Card className="p_card v2_card">
        <Card.Content className="p_card_content v2_card_content">
          <Image className="v2_pp" src="/img/uipack1/pp.jpg" circular />
          <Card.Header>John Doe</Card.Header>
          <Card.Meta>Developer</Card.Meta>
          <p className="v2_desc">
            10 Life Skills if you decide to move to Thailand
          </p>
          <Button className="primary_button v2_button">Learn more</Button>
          <Grid container columns={3}>
            <Grid.Column>
              <Icon name="like" /> 50
            </Grid.Column>
            <Grid.Column>
              <Icon name="comment" /> 30
            </Grid.Column>
            <Grid.Column>
              <Icon name="share" /> 20
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    </>
  );
};

export default VCard2;
