class Cat extends Pet {
  // static all = [];

  noise = () => {
    return `${this.name} goes meow, but in a cat's mind, thats the equivilant of a lion's roar!`
  }

  render() {
    super.render();
    getLastCardContent().innerHTML += `<p>${this.noise()}</p>`
  }
}

