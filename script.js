document.addEventListener('DOMContentLoaded', () => {
  const lastUpdateTime = document.getElementById('last-update-time');
  lastUpdateTime.innerText = new Date().toLocaleString();

  const competitors = {

    //pricipiantes hombres 
    
    beginnerMen: [
          { name: 'Alan Navarro',
             score: 0, 
             lane: '1 HEAT: 1',
              events: 
              [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                {name: 'Evento 2', reps:  0, extra: 'Sin datos'}, 
                {name: 'Evento 3', reps: 0, extra: 'Sin datos'}, 
                {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },




          { name: 'Ángel Castro',
             score: 0, 
             lane: '2  HEAT:1',
              events:
               [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                {name: 'Evento 3', reps: 0, extra: 'Sin datos'},
                {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },



           
                           
                 ],
                 //pricipiantes hombres fin 

                 //pricipiantes mujeres inicio 


      beginnerWomen: [
        { name: 'Norma Ángel',
          score: 0, 
          lane: '1 HEAT: 1',
          events:
          [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
           {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
           {name: 'Evento 3', reps: 0, extra: 'Sin datos'},
           {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },


    

           { name: 'Gaylid Cruz',
            score: 0, 
            lane: '2 HEAT: 1',
            events:
            [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
             {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
             {name: 'Evento 3', reps: 0, extra: 'Sin datos'},
             {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },


             { name: 'Margarita  Martinez',
              score: 0, 
              lane: '3 HEAT: 1',
              events:
              [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
               {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
               {name: 'Evento 3', reps: 0, extra: 'Sin datos'},
               {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },
  
  
      
               { name: 'Sofia Navarro',
                score: 0, 
                lane: '4 HEAT: 1',
                events:
                [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
                 {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
                 {name: 'Evento 3', reps: 0, extra: 'Sin datos'},
                 {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },
    
    
        
           


                    //HEAT 1 FIN 

                    //HEAT 2 INICIO 
            
       
                  

                      //HEAT 2 FIN 
                                                                                           
      ],

      //pricipiantes mujeres fin 


      //intermedios hombres inicio 


      intermediateMen: [
        
        { name: 'Erick Buendia',
          score: 0,
           lane: '1 HEAT: 1',
          events:
          [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
           {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
           {name: 'Evento 3', reps: 0, extra: 'Sin datos'},
           {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },
    

           { name: 'Cesar Pérez',
            score: 0,
             lane: '2 HEAT: 1',
            events:
            [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
             {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
             {name: 'Evento 3', reps: 0, extra: 'Sin datos'},
             {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },
      
 
             { name: 'Jahir Hernández',
              score: 0, 
              lane: '3 HEAT: 1',
              events:
              [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
               {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
               {name: 'Evento 3', reps: 0, extra: 'Sin datos'},
               {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },
        
  

                   //HEAT 1 FIN 
                  
                   //HEAT 2 INICIO 
       
                  

                             //HEAT 2 FIN 
                                                                               
      ],

      //intermedios hombres fin 


      //intermedios mujeres inicio 

      intermediateWomen: [
        { name: 'Montserrat Gochi',
          score: 0,
           lane: '1 HEAT: 1',
          events:
          [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
           {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
           {name: 'Evento 3', reps: 0, extra: 'Sin datos'},
           {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },
    

             { name: 'Lucía Navarro',
              score: 0,
               lane: '2 HEAT: 1',
              events:
              [{name: 'Evento 1', reps: 0, extra: 'Sin datos'}, 
               {name: 'Evento 2', reps: 0, extra: 'Sin datos'}, 
               {name: 'Evento 3', reps: 0, extra: 'Sin datos'},
               {name: 'Evento 4', reps: 0, extra: 'Sin datos'}] },
            
                       //HEAT1 FIN 

                       //HEAT 2 INICIO 
                            
                                                                                      
      ]
  };

  function populateTable(category, tableId) {
      const tableBody = document.querySelector(`#${tableId} tbody`);
      tableBody.innerHTML = '';
      const sortedCompetitors = competitors[category].sort((a, b) => b.score - a.score);
      sortedCompetitors.forEach(competitor => {
          const row = document.createElement('tr');
          row.addEventListener('click', () => {
              const eventsDetail = competitor.events.map(event => `${event.name}: ${event.reps} repeticiones, ${event.extra}`).join('\n');
              alert(`Nombre: ${competitor.name}\nPuntaje: ${competitor.score}\nCarril: ${competitor.lane}\n\nEventos:\n${eventsDetail}`);
          });

          const nameCell = document.createElement('td');
          nameCell.textContent = competitor.name;

          const scoreCell = document.createElement('td');
          scoreCell.textContent = competitor.score;

          row.appendChild(nameCell);
          row.appendChild(scoreCell);
          tableBody.appendChild(row);
      });
  }

  populateTable('beginnerMen', 'beginner-men-table');
  populateTable('beginnerWomen', 'beginner-women-table');
  populateTable('intermediateMen', 'intermediate-men-table');
  populateTable('intermediateWomen', 'intermediate-women-table');
});

function redirectToInstagram(url) {
  window.location.href = url;
}

