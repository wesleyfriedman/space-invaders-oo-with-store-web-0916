const CrewMember = (function createCrewMember(){
  return class {
    constructor(object) {
      this.id = object.id
      this.position = object.position
      this.currentShip = 'Looking for a Rig'
      Store.data.crewMembers.push(this)
      // Store.push(Object.assign({}, {crewMembers: [...Store.data.crewMembers, Store.data.crewMembers.push(this)]}))
    }

    assignShip(spaceship){
        this.ship_id = spaceship.id
        spaceship.docked = false
        Store.data.spaceships.filter((spaceship) => {
          if (spaceship.id === this.ship_id){
            this.currentShip = spaceship
            debugger
          }
        })
    }

    chargePhasers(){
      if (this.currentShip!= 'Looking for a Rig' && this.position === 'Gunner'){
        this.currentShip.phasersCharge = 'charged!'
      } else {
        return "had no effect"
      }
    }

    engageWarpDrive(){
      if (this.currentShip != 'Looking for a Rig' && this.position === 'Pilot' ){
        this.currentShip.warpDrive = 'engaged!'
      } else {
        return "had no effect"
      }
    }

    setsInvisibility(){
      if (this.currentShip!= 'Looking for a Rig' && this.position === 'Defender'){
        this.currentShip.cloaked = true
      } else {
        return "had no effect"
      }
    }

  }
}())
