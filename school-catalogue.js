class School {

    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
  get name() {
     return this._name;
  }
  
  get level() {
    return this._level;
  }
  
  get numberOfStudents() { 
    return this._numberOfStudents;
  }
  
  numberOfStudents() {
    if( typeof numberOfStudents === num) {
       this._numberOfStudents = numberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a number');
    }
  }
  
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
  }
  
  static pickSubstituteTeacher(substituteTeachers) {
     let randInt = Math.floor(Math.random() * substituteTeachers.length);
     return substituteTeachers[randInt];
  }
  }
  
  class PrimarySchool extends School {
   
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name);
      this._numberOfStudents = numberOfStudents;
      this._pickupPolicy = pickupPolicy;
      this._level = "primary";
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
  
    constructor(name, numberOfStudents, sportsTeams) {
      super(name);
      this._numberOfStudents = numberOfStudents;
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  let lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 541, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  console.log(lorraineHansbury.quickFacts());
  
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  let alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeams);
  