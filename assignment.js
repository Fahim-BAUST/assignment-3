//Problem 01: feet to mile converter 


function feetToMile(feet){
    var mile;
    if(feet<0)
    {
        return "length cannot be negative and so cannot be converted to";
    }
    else if(typeof feet == "string")
    {
        return "please give a positive number so that we can convert it to";
    }
    else{

        mile=feet/5280;
        return mile.toFixed(5);

    }
}

var feet=9;
var mile =feetToMile(feet);
console.log("(",feet,")","Feet =",mile,"Mile");


// PROBLEM 02 :- WOOD CALCULATOR

function woodCalculator(chairNo,tableNo,bedNo)
{

    var woodForChair, woodForTable,woodForBed, totallWood;

    if(chairNo<0 || tableNo<0 || bedNo<0)
    {
        return "Quantity cannot be negative and so we can not calculate this in ";
    }
    else if( typeof chairNo=='string' || typeof tableNo=='string' || typeof bedNo=='string')
    {
        return "please give positive numbers so that we can calculate this in";
    }

    else{
        woodForChair=1*chairNo;
        woodForTable=3*tableNo;
        woodForBed=5*bedNo;
        totallWood= woodForTable+woodForChair+woodForBed;
        return totallWood;
    }
}

var chairNo=1,tableNo=7,bedNo=5;
var totallWood =woodCalculator(chairNo,tableNo,bedNo);
console.log("Totall Wood  (for No of Chair:",chairNo,",for No of Table:",tableNo,",for No of Bed:",bedNo,") =",totallWood," cubic feet" );


//PROBLEM 03:- BRICK CALCULATOR)

function brickCalculator(noOfFloar){

    var totallHeight, totallBrick,temp;

    if(noOfFloar<0 || typeof noOfFloar=='string')
    {
        return "Input value cannot be negative or a string it have to be a number and so we can not calculate no of";
    }
    else if(noOfFloar <11){
        totallHeight= noOfFloar*15;
        totallBrick=totallHeight*1000;
        return totallBrick;
    }
    else if(noOfFloar <21)
    {
        temp=noOfFloar-10;
        totallHeight=(temp*12)+(10*15);
        totallBrick=totallHeight*1000;
        return totallBrick;
    }
    else if(noOfFloar>20)
    {
        temp = noOfFloar-20;
        totallHeight=(temp*10)+(10*12)+(10*15);
        totallBrick=totallHeight*1000;
        return totallBrick;
    }
    else{
        return "wrong input please check again otherwise we can not calculate no of "
    }

}


var noOfFloar=9;

var totallBrick=brickCalculator(noOfFloar);
console.log("total brick needed for (",noOfFloar,")floar building = ", totallBrick,"bricks")


// PROBLEM 04:- TINY FRIEND

function tinyFriend(friendName){
    var count=0;
    
    if(typeof friendName=='number' || friendName.length<1)
    {
        return "Warning : -Please give proper names ";
    }
    else
    {
        var tinyName=friendName[0].length;
        for(var i=0;i<friendName.length;i++)
        {
            if(friendName[i].length<tinyName)
            {
                tinyName=friendName[i].length;
                count=i;
            }
        }

        return friendName[count];
       
    }
}

var friendsName=["Fahim","Jhumur","Sumaiya"];
var tinyFriend=tinyFriend(friendsName);
console.log("Your tiny friend name is :- ",tinyFriend);