import React, { useState } from "react";
import {
  Grid,
  GridColumn,
  Container,
  Card,
  Form,
  Image,
  Input,
  Rating,
  Icon,
  Button,
} from "semantic-ui-react";
import "./EcommerceAnimated.css";

const EcommerceAnimated = () => {
  const [currImg, setcurrImg] = useState(0);
  const [animcss, setAnimcss] = useState("main-img");
  const allImg = ["/img/ecommercecard/chair1.png", "/img/ecommercecard/a.jpg"];
  return (
    <>
      <div className="main">
        <div className="card_container">
          <Grid stackable columns={2} className="grid">
            <GridColumn className="grid-left">
              <img
                className={animcss}
                src={allImg[currImg]}
                alt="big chair"
                onAnimationEnd={() => setAnimcss("")}
              />
              <div className="nav-image-con">
                <Image
                  className="nav-image"
                  as="a"
                  onClick={() => {
                    setcurrImg(0);
                    setAnimcss("main-img");
                  }}
                  src="/img/ecommercecard/smch1.jpg"
                  alt="small chair 1"
                />
                <Image
                  className="nav-image"
                  as="a"
                  onClick={() => {
                    setcurrImg(0);
                    setAnimcss("main-img");
                  }}
                  src="/img/ecommercecard/smch2.jpg"
                  alt="small chair 2"
                />
                <Image
                  className="nav-image"
                  as="a"
                  onClick={() => {
                    setcurrImg(0);
                    setAnimcss("main-img");
                  }}
                  src="/img/ecommercecard/smch3.jpg"
                  alt="small chair 3"
                />
              </div>
            </GridColumn>
            <GridColumn className="grid-right">
              <p className="p-catetory">Furniture</p>
              <h1 className="p-name">Mid-Century Modern Home Chair</h1>
              <Rating
                icon="star"
                defaultRating={5}
                maxRating={5}
                size="small"
                className="p-rating"
              />
              <p className="p-price">$ 250.50</p>
              <p className="p-content">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',
              </p>
              <div className="p-available">
                <p>Available in : </p>
                <Icon name="circle" className="a" />
                <Icon name="circle" className="b" />
                <Icon name="circle" className="c" />
              </div>
              <form className="cart-val">
                <Input type="number" className="num-input" />
                <Button className="cart-btn">ADD TO CART</Button>
              </form>
            </GridColumn>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default EcommerceAnimated;
