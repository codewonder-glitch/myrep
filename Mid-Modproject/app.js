class US_Ship{
    constructor(hull,firepower,accuracy){
    this.hull=hull;
    this.firepower=firepower;
    this.accuracy=accuracy;
    }
    attack=()=>
    {
        for(let i=currentAlien;i<6;i++)
        {
            console.log("US is attacking alien " +i);
            
            if(Math.random()<=Aliens[i].accuracy)
            {
                console.log("U.S attacked alien " +i  +"successfully");
                if(this.hull_calc(i)<=0)
                {
                console.log("Hooray!!!Alien " +i +"ship is destroyed");
                }
                else i--;        
            }else{
console.log("Aliegn " +i+ "is going to attack"); 
                Aliens[i].attack(i);
                return;
            }
        }

    }
    hull_calc(i){
        Aliens[i].hull=Aliens[i].hull-Aliens[i].firepower;
        console.log("Alen hull value is"+Aliens[i].hull);
        return Aliens[i].hull;
        
        
        }
}
class Alien_Ship{
constructor(hull_start,hull_endfirepower_start,firepower_start,firepower_end,accuracy_start,accuracy_end ){
this.hull=Math.floor(Math.random()*3)+3;
this.firepower=Math.floor(Math.random()*2)+2;
this.accuracy=((Math.floor(Math.random() * 3) + 6) )/10;
}
    attack(Aliegnno)
    {
     console.log("Aleins are attacking U.S");
     if(Math.random()<=us_Ship.accuracy)
        {
         console.log("Aliens attacked U.S successfully");
        if(this.hull_calc()<=0)
        {
        console.log("U.S ship is destroyed");
        return;
        }
        else this.attack(Aliegnno);
    }else
        {
            currentAlien=Aliegnno;
            console.log("current Alien no is"+currentAlien);
        us_Ship.attack();
        
        }

        
   }
    hull_calc(){
        this.hull=this.hull-this.firepower;
        console.log(this.hull);
        return this.hull;
    
    
    }
}





const Alien1= new Alien_Ship(1,2,3,4,5,6);
const Alien2= new Alien_Ship(1,2,3,4,5,6);
const Alien3= new Alien_Ship(1,2,3,4,5,6);
const Alien4= new Alien_Ship(1,2,3,4,5,6);
const Alien5= new Alien_Ship(1,2,3,4,5,6);
const Alien6= new Alien_Ship(1,2,3,4,5,6);
let Aliens=[Alien1,Alien2,Alien3,Alien4,Alien5,Alien6];
var currentAlien=0;
const us_Ship=new US_Ship(20,5,0.7);
console.log(us_Ship.hull);
us_Ship.attack();



