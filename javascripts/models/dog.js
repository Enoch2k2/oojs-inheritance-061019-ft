class Dog extends Pet {
  // static all = [];

  noise = () => {
    return `${this.name} goes bark! Mainly because they are excited you are home, or excited that they have food, or excited that what they were staring at for the past hour finally moved.`
  }

  render() {
    super.render();
    getLastCardContent().innerHTML += `
      <p>${this.noise()}</p>
    `
  }
}