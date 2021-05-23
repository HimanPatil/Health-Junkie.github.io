console.log('Hello World!');

/* navbar */

 var search_burger= document.querySelector('.search-burger') 

var x = document.querySelector('.icon')
var navbar= document.querySelector('.navbar')
var sch = document.querySelector('.sch')

var fun= function burgerfun(){
  x.classList.toggle('fa-close')
  navbar.classList.toggle('h-nav-resp')
  sch.classList.toggle('v-class')
 

}


search_burger.addEventListener('click',fun)






/*Search*/


var search_list= new Array();
search_list[0]= "Food";
search_list[1]= "Exercise";
search_list[2]= "Remedies";

/*  Fruits */
search_list[3]= "Apple";
search_list[4]= "Mango";
search_list[5]= "Banana";
search_list[6]= "Orange";
search_list[7]= "Pear";
search_list[8]= "Lemon";
search_list[9]= "Watermelon";

/*  Vegetables */
search_list[10]="Tomato";
search_list[11]="Onion";
search_list[12]="Broccoli";
search_list[13]="Peas";
search_list[14]="Bitter melon";
search_list[15]="Carrot" ;
/*   Nonveg */
search_list[16] = "Chicken";
search_list[17] = "Egg";
search_list[18] = "Prawn"

/* Gym */
search_list[19]="Shoulder workout";
search_list[20]="Chest workout";
search_list[21]="Biceps workout";
search_list[22]="Triceps workout";
search_list[23]="Back workout";
search_list[24]="Legs workout" ;

/* Yoga */
search_list[25]="Surya namaskar";
search_list[26]="Padmasana";
search_list[27]="Tadasana";
search_list[28]="Vrikshasana";
search_list[29]="Pranayama";

/* Normal Exercise */
search_list[30]="Push-up" ;
search_list[31]="Squats";
search_list[32]="Pull-up";
search_list[33]="Crunches";
search_list[34]="Skippings" ;
search_list[35]="Glute-bridge" ;

/* remedies */
search_list[36]="Heart";
search_list[37]="Skin";
search_list[38]="Kidney";
search_list[39]="Lungs";
search_list[40]="Diabetes" ;
search_list[41]="Teeth";
search_list[42]="Hair";
search_list[4]="Digestion";
search_list[44]="Liver" ;


var list= document.getElementById("content");

search_list.forEach(function(item) {
      var option = document.createElement('option');
      option.value = item;
      list.appendChild(option);
});    

function formAction()
{
  var a= document.getElementById('search-input').value;
  
  
  if (a == 'Food'|| a == 'food') {
    document.newForm.action ="food.html";
    
  }
  
  if (a == 'Exercise'|| a == 'exercise') {
    document.newForm.action = "exercise.html";
  }
  
  if (a == 'Remedies' || a == 'remedies') {
    document.newForm.action = "remedies.html";
  }
  
  /* Fruits */
  if (a=='Apple'||a=='apple') {
    document.newForm.action = "food.html#apple";
    
  }
  
  if (a == 'Mango' || a=='mango') {
    document.newForm.action = "food.html#mango";
  }
  
  if (a == 'Banana' || a=='banana') {
    document.newForm.action = "food.html#banana";
  }
  
   if (a == 'Orange' || a=='orange') {
     document.newForm.action = "food.html#orange";
   }
   
   if (a == 'Pear' || a == 'pear') {
     document.newForm.action = "food.html#pear";
   }
   
   if (a == 'Lemon' || a == 'lemon') {
     document.newForm.action = "food.html#lemon";
   }
   
   if (a == 'Watermelon' || a == 'watermelon') {
     document.newForm.action = "food.html#watermelon";
   }
   
   /*  Vegetable*/
   if (a == 'Tomato' || a == 'tomato') {
     document.newForm.action = "food.html#tomato";
   }
   
   if (a == 'Onion' || a == 'onion') {
     document.newForm.action = "food.html#onion";
   }
   
   if (a == 'Broccoli' || a == 'broccoli') {
     document.newForm.action = "food.html#broccoli";
   }
   
   if (a == 'Peas' || a == 'peas') {
     document.newForm.action = "food.html#peas";
   }
   
   if (a == 'Bitter melon' || a == 'bitter melon') {
     document.newForm.action = "food.html#bitter_melon";
   }
   
   if (a == 'Carrot' || a == 'carrot') {
     document.newForm.action = "food.html#carrot";
   }
   
   /*   Nonveg*/
   
   if (a == 'Chicken' || a == 'chicken') {
     document.newForm.action = "food.html#chicken";
   }
   
   if (a == 'Egg' || a == 'egg') {
     document.newForm.action = "food.html#egg";
   }
   
   if (a == 'Prawn' || a == 'prawn') {
     document.newForm.action = "food.html#prawn";
   }

   /* Gym */

    if (a == 'Shoulder workout' || a == 'shoulder workout') {
      document.newForm.action = "exercise.html#shoulder";
    }
    
    if (a == 'Chest workout' || a == 'chest workout') {
      document.newForm.action = "exercise.html#chest";
    }
    
    if (a == 'Biceps workout' || a == 'biceps workout') {
      document.newForm.action = "exercise.html#biceps";
    }
    
    if (a == 'Triceps workout' || a == 'triceps workout') {
      document.newForm.action = "exercise.html#triceps";
    }
    
    if (a == 'Back workout' || a == 'back workout') {
      document.newForm.action = "exercise.html#back";
    }
    
    if (a == 'Legs workout' || a == 'legs workout') {
      document.newForm.action = "exercise.html#legs";
    }

     /*Yoga*/

     if (a == 'Surya namaskar' || a == 'surya namaskar') {
      document.newForm.action = "exercise.html#surya-namaskar";
    }
    
    if (a == 'Padmasana' || a == 'padmasana ') {
      document.newForm.action = "exercise.html#padmasana";
    }
    
    if (a == 'Tadasana' || a == 'tadasana') {
      document.newForm.action = "exercise.html#tadasana";
    }
    
    if (a == 'Vrikshasana' || a == 'vrikshasana') {
      document.newForm.action = "exercise.html#vrikshasana";
    }
    
    if (a == 'Pranayama' || a == 'pranayama') {
      document.newForm.action = "exercise.html#pranayama";
    }
    
 

     /*Normal exercise*/

     if (a == 'Push-up' || a == 'push-up') {
      document.newForm.action = "exercise.html#push-up";
    }
    
    if (a == 'Squats' || a == 'squats ') {
      document.newForm.action = "exercise.html#squats";
    }
    
    if (a == 'Pull-up' || a == 'pull-up') {
      document.newForm.action = "exercise.html#pull-up";
    }
    
    if (a == 'Crunches' || a == 'crunches') {
      document.newForm.action = "exercise.html#crunches";
    }
    
    if (a == 'Skippings' || a == 'skippings') {
      document.newForm.action = "exercise.html#skippings";
    }
    
    if (a == 'Glute-bridge' || a == 'glute-bridge') {
      document.newForm.action = "exercise.html#glute-bridge";
    }

     /*Remedies*/

     if (a == 'Heart' || a == 'heart') {
      document.newForm.action = "remedies.html#heart";
    }
    
    if (a == 'Skin' || a == 'skin') {
      document.newForm.action = "remedies.html#skin";
    }
    
    if (a == 'Kidney' || a == 'kidney') {
      document.newForm.action = "remedies.html#kidney";
    }
    
    if (a == 'Lungs' || a == 'lungs') {
      document.newForm.action = "remedies.html#lungs";
    }
    
    if (a == 'Diabetes' || a == 'diabetes') {
      document.newForm.action = "remedies.html#diabetes";
    }
    
    if (a == 'Teeth' || a == 'teeth') {
      document.newForm.action = "remedies.html#teeth";
    }

    if (a == 'Hair' || a == 'hair') {
      document.newForm.action = "remedies.html#hair";
    }

    if (a == 'Digestion' || a == 'digestion') {
      document.newForm.action = "remedies.html#digestion";
    }

    if (a == 'Liver' || a == 'liver') {
      document.newForm.action = "remedies.html#liver";
    }
}



/*Tips*/
function tip(){
  var arr=new Array();
  arr[0]= "Drink atleast 8 glass of water daily to be hydrated.";
  arr[1]= "Have 2 bananas a day for good digestion.";
  arr[2]="Eat Apple a day keep doctor away.";
  arr[3]="Consume less salt and sugar.";
  arr[4]="Exercise not only changes your body but also change your mind and boost good mood.";
  arr[5]="Daily non-stop 20 push-ups is the proof of good HEART health.";
  arr[6]="Always drink water 30min before and after a meal for better digestion.";
  arr[7]="Honey, Butter-milk and Green tea helps in weight-loss.";
  arr[8]="Green peas are the best alternative for meat, they are rich in Plant Protiens.";
  arr[9]="Banana, Milk and Egg are good for weight-gain.";
  arr[10]="Banana shake is good for weight-gain but not for someone with poor digestion";
  arr[11]="Eat 2 Almonds daily to reduce the risk of Cancer.";
  arr[12]="Eat Apple a day keep doctor away";

 var tip= arr[Math.floor(Math.random()*arr.length)];
 
 document.getElementById("tip").innerHTML=tip;
}