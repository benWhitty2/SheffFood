function questionMethod(revealed,location,idNo) {
    if (revealed == true) {
      document.getElementById("output" + idNo).innerHTML =":";
      document.getElementById("question" + idNo).innerHTML ="Reveal";
      return false;
    }
    else{ 
      document.getElementById("output" + idNo).innerHTML =":" + location;
      document.getElementById("question" + idNo).innerHTML ="Hide";
    return true;
  }
  }
  
  // main program
  

  let q1 = false;
  document.getElementById('question1').addEventListener('click',function(){
    q1 = questionMethod(q1,"The Student Union", "1");
  },false);

  let q2 = false;
  document.getElementById('question2').addEventListener('click',function(){
    q2 = questionMethod(q2,"St George's Church", "2");
  },false);

  let q3 = false;
  document.getElementById('question3').addEventListener('click',function(){
    q3 = questionMethod(q3,"The Art's Building", "3");
  },false);

  