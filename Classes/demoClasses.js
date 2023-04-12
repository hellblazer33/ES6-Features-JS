class Profile {   
    constructor(name, city) { 
       this.name = name;
       this.city = city;     
    }  
     
    details() {       
      console.log(`I am ${this.name} from ${this.city}`);    
    } 
    sumOfTwoNumbers(a,b){
      console.log(a+b);
    }
 }
 let obj = new Profile('Ram', 'Delhi');
 obj.details();
 obj.sumOfTwoNumbers(10,20);