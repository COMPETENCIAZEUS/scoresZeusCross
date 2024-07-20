document.addEventListener('DOMContentLoaded', () => {
  const lastUpdateTime = document.getElementById('last-update-time');
  lastUpdateTime.innerText = new Date().toLocaleString();

  const competitors = {

    //pricipiantes hombres 
    
    beginnerMen: [
          { name: 'Angel Castro',
             score: 198, 
             lane: '1 HEAT: 1',
              events: 
              [{name: 'Evento 1', reps: 0, extra: '72'}, 
                {name: 'Evento 2', reps:  0, extra: 'Tc:4:56'}, 
                {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },
                



          { name: 'Alan Navarro',
             score: 198, 
             lane: '1  HEAT:2',
             events: 
             [{name: 'Evento 1', reps: 0, extra: '80 reps'}, 
               {name: 'Evento 2', reps:  0, extra: 'Tc:5:31'}, 
               {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
               {name: 'Evento 4', reps: 0, extra: 'Tc:'}] }



           
                           
                 ],
                 //pricipiantes hombres fin 

                 //pricipiantes mujeres 

                 


      beginnerWomen: [
        { name: 'Gaylid Cruz',
          score: 198, 
          lane: '2 HEAT: 1',
          events: 
          [{name: 'Evento 1', reps: 0, extra: '59 reps'}, 
            {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
            {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
            {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },


    

           { name: 'Lizbeth Galicia',
            score: 188, 
            lane: '3 HEAT: 1',
            events: 
            [{name: 'Evento 1', reps: 0, extra: '70 reps'}, 
              {name: 'Evento 2', reps:  0, extra: 'Tc:5:07'}, 
              {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
              {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },

             { name: 'Ali Mota',
              score: 0, 
              lane: '4 HEAT: 1',
              events: 
              [{name: 'Evento 1', reps: 0, extra: 'Tc:'}, 
                {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },
  
      
               { name: 'Sofia Navarro',
                score: 190, 
                lane: '5 HEAT: 1',
                events: 
                [{name: 'Evento 1', reps: 0, extra: 'Tc: 7:48'}, 
                  {name: 'Evento 2', reps:  0, extra: 'Tc:5:34'}, 
                  {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                  {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },

                

             

                   //heat 1 fin 

                   //heat 2 inicio

                   { name: 'Ana Perez',
                    score: 186, 
                    lane: '2 HEAT: 2',
                    events: 
                    [{name: 'Evento 1', reps: 0, extra: '56 reps'}, 
                      {name: 'Evento 2', reps:  0, extra: 'Tc:4:53'}, 
                      {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                      {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },


                     { name: 'Lorena Gallardo',
                      score: 198, 
                      lane: '3 HEAT: 2',
                      events: 
                      [{name: 'Evento 1', reps: 0, extra: '112 reps'}, 
                        {name: 'Evento 2', reps:  0, extra: 'Tc:3:56'}, 
                        {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                        {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },


                       { name: 'Margarita Martinez',
                        score: 187, 
                        lane: '4 HEAT: 2',
                        events: 
                        [{name: 'Evento 1', reps: 0, extra: '77'}, 
                          {name: 'Evento 2', reps:  0, extra: 'Tc:5:20'}, 
                          {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                          {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },

        
                      //HEAT 2 FIN 
                                                                                           
      ],

      //pricipiantes mujeres fin 


      //intermedios hombres inicio 


      intermediateMen: [
        
        { name: 'Erick Buendia',
          score: 98,
           lane: '1 HEAT: 1',
           events: 
              [{name: 'Evento 1', reps: 0, extra: '83 reps'}, 
                {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },

           { name: 'Cesar Pérez',
            score: 100,
             lane: '1 HEAT: 2',
             events: 
              [{name: 'Evento 1', reps: 0, extra: '94 reps'}, 
                {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },
        
      


               { name: 'Shem Huitron',
                score: 96, 
                lane: '2 HEAT: 2',
                events: 
                [{name: 'Evento 1', reps: 0, extra: '77 reps'}, 
                  {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                  {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                  {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },
          


                  { name: 'Jhair Hernandez',
                    score: 94, 
                    lane: '2 HEAT: 2',
                    events: 
                    [{name: 'Evento 1', reps: 0, extra: '79 reps'}, 
                      {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                      {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                      {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },
              
        
  

                   //HEAT 1 FIN 
                  
                   //HEAT 2 INICIO 
       
                  

                             //HEAT 2 FIN 
                                                                               
      ],

      //intermedios hombres fin 


      //intermedios mujeres inicio 

      intermediateWomen: [
   
       
    

             { name: 'Lucía Navarro',
              score: 96,
               lane: '3 HEAT: 1',
               events: 
               [{name: 'Evento 1', reps: 0, extra: '84'}, 
                 {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                 {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                 {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },
           

                   { name: 'Jessica Robles',
                    score: 100,
                     lane: '4 HEAT: 1',
                     events: 
                     [{name: 'Evento 1', reps: 0, extra: '92 reps'}, 
                       {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                       {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                       {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },

                     { name: 'Montserrat Gochi',
                      score: 92,
                       lane: '3 HEAT: 2',
                       events: 
                       [{name: 'Evento 1', reps: 0, extra: '79'}, 
                         {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                         {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                         {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },

                       { name: 'Catalina Cabrera',
                        score: 94,
                         lane: '4 HEAT: 2',
                         events: 
                         [{name: 'Evento 1', reps: 0, extra: '87 reps'}, 
                           {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                           {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                           {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },


                         { name: 'Ivonne Suarez',
                          score: 98,
                           lane: 'HEAT: 2',
                           events: 
              [{name: 'Evento 1', reps: 0, extra: '83 reps'}, 
                {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },
                    
                
                
              
            
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
