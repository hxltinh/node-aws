import React from "react";
import { TopMenu } from "./TopMenu";
import { ImagesSlider } from "./ImagesSlider";
import { OurProduct } from './OurProduct';
import { Introduction } from "./Introduction";

class Index extends React.Component {
  constructor() {
    super();
    this.state = { name: "a", email: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  onNameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <TopMenu />
        <Introduction />
        <OurProduct />
      </div>
    );
  }
}
export default Index;
