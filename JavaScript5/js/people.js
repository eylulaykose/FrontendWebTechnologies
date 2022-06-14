class Course{
  static numberOfCourse = 0;
  constructor(code, name, credit){
    this.code = code;
    this.name = name;
    this.credit = credit;
    Course.numberOfCourse++;
  }
  display(){
    return this.code+"-"+this.name+", "+this.credit+"<br>";
  }
  static getNumberOfCourse(){
    return this.numberOfCourse;
  }
}


class Person{
  #name;
  constructor(name, surname, bday){
    this.#name = name;
    this.surname = surname;
    this.bday = bday;
  }
  display(){
    return this.name+" "+this.surname+" "+this.bday+" ";
  }  
  getName(){
    return this.#name;
  }
}


class Student extends Person{
  constructor(name, surname, bday, id, dept){
    super(name, surname, bday);
    this.id = id;
    this.dept = dept;
    this.courses=[];
  }
  addCourse(course){
    this.courses.push(course);
  }
  display(){
     let out = super.display()+this.id+" "+this.dept+"<br>";         
     for(let c of this.courses)
        out +=c.display();
     return out;
  }
}