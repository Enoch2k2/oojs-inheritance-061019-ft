class Bird extends Pet {
  // static all = [];

  noise = () => {
    return `${this.name} goes SQUAWK!!! Or Chirp, or just repeats everything you say...`
  }

  render() {
    super.render();
    getLastCardContent().innerHTML += `
      <p>${this.noise()}</p>
    `
  }
}