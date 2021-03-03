import React from "react";
import { Grid } from "semantic-ui-react";
import PricingCard from "./Layouts/PricingCard";
import VCard1 from "./Layouts/VCard1";
import VCard2 from "./Layouts/VCard2";

const Pack1 = () => {
  return (
    <>
      <h1></h1>
      <Grid container stackable doubling columns={3}>
        <Grid.Column>
          <PricingCard />
        </Grid.Column>
        <Grid.Column>
          <VCard1 />
        </Grid.Column>
        <Grid.Column>
          <VCard2 />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Pack1;
