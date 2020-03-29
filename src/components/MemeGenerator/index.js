import React, { Component } from "react";

import { NeuButton, NeuInput } from "neumorphic-ui";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }; //empty state

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        // console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <div className="headerInput">
            <NeuInput
              width="50%"
              onChange={e => this.setState({ topText: e.target.value })}
              placeholder="Top Text"
              value={this.state.topText}
            />
          </div>
          <div className="headerInput">
            <NeuInput
              width="50%"
              onChange={e => this.setState({ bottomText: e.target.value })}
              placeholder="Bottom Text"
              value={this.state.bottomText}
            />
          </div>
          <button className="headerInput">
            <NeuButton text="Generate" />
          </button>
        </form>

        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
export default MemeGenerator;
