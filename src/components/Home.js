import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
      title="Model S"
      description="Order online for tuchless delivery"
      backgroundImg = "model-s.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model Y"
      description="Order online for tuchless delivery"
      backgroundImg = "model-y.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model 3"
      description="Order online for tuchless delivery"
      backgroundImg = "model-3.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Model x"
      description="Order online for tuchless delivery"
      backgroundImg = "model-x.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Existing Inventory"
      />
      <Section
      title="Lowest Cost Solar Panels in America"
      description="Money-back gurantee"
      backgroundImg = "solar-panel.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      />
      
    </Container>
  )
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
