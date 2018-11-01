class Quest {
  contructor ({title, description}) {
    this.title = title;
    this.description = description;
  }

  checkCondition (player, additional = {}) {
    return true;
  }
}

export default Quest;
