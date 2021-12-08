function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
function createDaysOfMonth(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
      const days = dezDaysList[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      dayListItem.classList.add('day');
      if (days === 24 || days === 25 || days === 31 ) {
        dayListItem.classList.add('holiday');
      };
      if (days === 4 || days === 11 || days === 18 || days === 25 ) {
        dayListItem.classList.add('friday');
      };

      monthDaysList.appendChild(dayListItem);
    };
  
 };
 createDaysOfMonth();

 function createButtonFeriados(string) {
   const pai = document.querySelector('.buttons-container');
   const button = document.createElement('button');
   button.innerText = string;
   button.setAttribute('id','btn-holiday');
   pai.appendChild(button);   
 };
createButtonFeriados('Feriados');

const element1 = document.querySelector('#btn-holiday');
element1.addEventListener('click',function (){
  const element2 = document.querySelectorAll('.holiday');
  for (let index = 0; index < element2.length; index += 1){
    element2[index].style.backgroundColor = "red";
  }
  element1.addEventListener('click',function (){
    const element2 = document.querySelectorAll('.holiday');
    for (let index = 0; index < element2.length; index += 1){
      element2[index].style.backgroundColor = "rgb(238,238,238)";
    }
  });
});

function createButtonSextaFeira(string) {
  const pai = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.innerText = string;
  button.setAttribute('id','btn-friday');
  pai.appendChild(button);   
};
createButtonSextaFeira('Sexta-feira');

const element2 = document.querySelector('#btn-friday');
element2.addEventListener('click',function (){
  const element3 = document.querySelectorAll('.friday');
  for (let index = 0; index < element3.length; index += 1){
    element3[index].innerText = "SEXTOU!!!";
  }
  element2.addEventListener('click',function (){
      for (let index = 0; index < element3.length; index += 1){
        if (index === 0){
          element3[index].innerText = "4";
        };
        if (index === 1){
          element3[index].innerText = "11";
        };
        if (index === 2){
          element3[index].innerText = "18";
        };
        if (index === 3){
          element3[index].innerText = "25";
        }
      
    } 
  });
});


  