class Pet {
  constructor(name) {
    this.name = name;
  }

  render() {
    getAnimalList().innerHTML += `
      <div class="card">
        <div class="card-content">
          <span class="card-title">${this.name}</span>
        </div>
      </div>
    `
  }
}