const Spaceship = (function createSpaceship(){
  return class {
    constructor(object) {
      this.id = object.id
      this.name = object.name
      this.phasersCharge = 'uncharged'
      this.phasers = object.phasers
      this.shields = object.shields
      this.cloaked = false
      this.warpDrive = 'disengaged'
      this.docked = true
      Store.data.spaceships.push(this)
    }

  }
}())
