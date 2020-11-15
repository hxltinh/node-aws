import React from "react";
import { TopMenu } from "./TopMenu";
import { OurProduct } from './OurProduct';
import { Introduction } from "./Introduction";

class Index extends React.Component {
  constructor() {
    super();
    this.state = { name: "a", email: "" };
  }

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
