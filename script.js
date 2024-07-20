document.addEventListener('DOMContentLoaded', () => {
  const lastUpdateTime = document.getElementById('last-update-time');
  lastUpdateTime.innerText = new Date().toLocaleString();

  const competitors = {

    //pricipiantes hombres 
    
    beginnerMen: [
          { name: 'Angel Castro',
             score: 396, 
             lane: '1 HEAT: 1',
              events: 
              [{name: 'Evento 1', reps: 72, extra: 'tc'}, 
                {name: 'Evento 2', reps:  0, extra: 'Tc:4:56'}, 
                {name: 'Evento 3', reps: 0, extra: 'Tc:7:16'}, 
                {name: 'Evento 4', reps: 335, extra: 'LBS:255'}] },
                



          { name: 'Alan Navarro',
             score: 398, 
             lane: '2  HEAT:1',
             events: 
             [{name: 'Evento 1', reps: 80, extra: 'tc'}, 
               {name: 'Evento 2', reps:  0, extra: 'Tc:5:31'}, 
               {name: 'Evento 3', reps: 0, extra: 'Tc:5:09'}, 
               {name: 'Evento 4', reps: 0, extra: 'LBS:335'}] }



           
                           
                 ],
                 //pricipiantes hombres fin 

                 //pricipiantes mujeres 

                 


      beginnerWomen: [
        { name: 'Gaylid Cruz',
          score: 380, 
          lane: '2 HEAT: 2',
          events: 
          [{name: 'Evento 1', reps: 59, extra: 'Tc'}, 
            {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
            {name: 'Evento 3', reps: 48, extra: 'Tc:'}, 
            {name: 'Evento 4', reps: 95, extra: 'LBS:95'}] },


    

           { name: 'Lizbeth Galicia',
            score: 374, 
            lane: '1 HEAT: 2',
            events: 
            [{name: 'Evento 1', reps: 70, extra: 'Tc'}, 
              {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
              {name: 'Evento 3', reps: 0, extra: 'Tc:9:14'}, 
              {name: 'Evento 4', reps: 125, extra: 'Tc:125'}] },

             { name: 'Ali Mota',
              score: 0, 
              lane: '4 HEAT: 1',
              events: 
              [{name: 'Evento 1', reps: 0, extra: 'Tc:'}, 
                {name: 'Evento 2', reps:  0, extra: 'Tc:'}, 
                {name: 'Evento 3', reps: 0, extra: 'Tc:'}, 
                {name: 'Evento 4', reps: 0, extra: 'LBS:'}] },
                
      
               { name: 'Sofia Navarro',
                score: 300, 
                lane: '5 HEAT: 1',
                events: 
                [{name: 'Evento 1', reps: 0, extra: 'Tc: 7:48'}, 
                  {name: 'Evento 2', reps:  0, extra: 'Tc:5:34'}, 
                  {name: 'Evento 3', reps: 0, extra: 'Tc:4:32'}, 
                  {name: 'Evento 4', reps: 0, extra: 'Tc:'}] },

                

             

                   //heat 1 fin 

                   //heat 2 inicio

                   { name: 'Ana Perez',
                    score: 376, 
                    lane: '3 HEAT: 3',
                    events: 
                    [{name: 'Evento 1', reps: 56, extra: 'Tc:'}, 
                      {name: 'Evento 2', reps:  0, extra: 'Tc:4:53'}, 
                      {name: 'Evento 3', reps: 0, extra: 'Tc:7:31'}, 
                      {name: 'Evento 4', reps: 0, extra: 'LBS:165'}] },


                     { name: 'Lorena Gallardo',
                      score: 392, 
                      lane: '3 HEAT: 3',
                      events: 
                      [{name: 'Evento 1', reps: 112, extra: 'Tc:'}, 
                        {name: 'Evento 2', reps:  0, extra: 'Tc:3:56'}, 
                        {name: 'Evento 3', reps: 0, extra: 'Tc:5:48'}, 
                        {name: 'Evento 4', reps: 0, extra: 'LBS:183'}] },


                       { name: 'Margarita Martinez',
                        score: 385, 
                        lane: '1 HEAT: 3',
                        events: 
                        [{name: 'Evento 1', reps: 77, extra: 'Tc'}, 
                          {name: 'Evento 2', reps:  0, extra: 'Tc:5:20'}, 
                          {name: 'Evento 3', reps: 0, extra: 'Tc:5:42'}, 
                          {name: 'Evento 4', reps: 225, extra: 'LBS:225'}] },

        
                      //HEAT 2 FIN 
                                                                                           
      ],

      //pricipiantes mujeres fin 


      //intermedios hombres inicio 


      intermediateMen: [
        
        { name: 'Erick Buendia',
          score: 388,
           lane: '1 HEAT: 1',
           events: 
              [{name: 'Evento 1', reps: 83, extra: 'Tc:'}, 
                {name: 'Evento 2', reps:  0, extra: 'Tc: 5:43'}, 
                {name: 'Evento 3', reps: 0, extra: 'Tc:6:53'}, 
                {name: 'Evento 4', reps: 0, extra: 'LBS: 275'}] },

           { name: 'Cesar Pérez',
            score: 394,
             lane: '2 HEAT: 2',
             events: 
              [{name: 'Evento 1', reps: 94, extra: 'Tc:'}, 
                {name: 'Evento 2', reps:  0, extra: 'Tc:5:20'}, 
                {name: 'Evento 3', reps: 0, extra: 'Tc:4:56'}, 
                {name: 'Evento 4', reps: 0, extra: 'LBS:255'}] },
        
      


               { name: 'Shem Huitron',
                score: 286, 
                lane: '2 HEAT: 1',
                events: 
                [{name: 'Evento 1', reps: 77, extra: '77 reps'}, 
                  {name: 'Evento 2', reps:  0, extra: 'Tc:6:08'}, 
                  {name: 'Evento 3', reps: 0, extra: 'Tc:6:20'}, 
                  {name: 'Evento 4', reps: 265, extra: '265'}] },
          


                  { name: 'Jhair Hernandez',
                    score: 386, 
                    lane: '1 HEAT: 2',
                    events: 
                    [{name: 'Evento 1', reps: 79, extra: 'Tc:'}, 
                      {name: 'Evento 2', reps:  0, extra: 'Tc:5:37'}, 
                      {name: 'Evento 3', reps: 0, extra: 'Tc:7:45'}, 
                      {name: 'Evento 4', reps: 305, extra: '305'}] },
              
        
  

                   //HEAT 1 FIN 
                  
                   //HEAT 2 INICIO 
       
                  

                             //HEAT 2 FIN 
                                                                               
      ],

      //intermedios hombres fin 


      //intermedios mujeres inicio 

      intermediateWomen: [
   
       
    

             { name: 'Lucía Navarro',
              score: 380,
               lane: '1 HEAT: 3',
               events: 
               [{name: 'Evento 1', reps: 84, extra: 'Tc:'}, 
                 {name: 'Evento 2', reps:  0, extra: 'Tc:5:10'}, 
                 {name: 'Evento 3', reps: 0, extra: 'Tc:7:50'}, 
                 {name: 'Evento 4', reps: 215, extra: 'Tc:215'}] },
           

                   { name: 'Jessica Robles',
                    score: 390,
                     lane: '1 HEAT: 4',
                     events: 
                     [{name: 'Evento 1', reps: 92, extra: 'Tc:'}, 
                       {name: 'Evento 2', reps:  0, extra: 'Tc:4:38'}, 
                       {name: 'Evento 3', reps: 0, extra: 'Tc:6:58'}, 
                       {name: 'Evento 4', reps: 145, extra: 'LBS: 145'}] },

                     { name: 'Montserrat Gochi',
                      score: 375,
                       lane: '2 HEAT: 4',
                       events: 
                       [{name: 'Evento 1', reps: 80, extra: 'Tc:'}, 
                         {name: 'Evento 2', reps:  0, extra: 'Tc:5:08'}, 
                         {name: 'Evento 3', reps: 0, extra: 'Tc:9:54'}, 
                         {name: 'Evento 4', reps: 135, extra: 'LBS: 135'}] },

                       { name: 'Catalina Cabrera',
                        score: 393,
                         lane: '2 HEAT: 3',
                         events: 
                         [{name: 'Evento 1', reps: 87, extra: 'Tc:'}, 
                           {name: 'Evento 2', reps:  0, extra: 'Tc:4:58'}, 
                           {name: 'Evento 3', reps: 0, extra: 'Tc:6:05'}, 
                           {name: 'Evento 4', reps: 225, extra: 'LBS 225'}] },


                         { name: 'Ivonne Suarez',
                          score: 394,
                           lane: '3 HEAT: 4',
                           events: 
              [{name: 'Evento 1', reps: 83, extra: 'Tc:'}, 
                {name: 'Evento 2', reps:  0, extra: 'Tc:4:20'}, 
                {name: 'Evento 3', reps: 0, extra: 'Tc:5:31'}, 
                {name: 'Evento 4', reps: 165, extra: 'LBS: 165'}] },
                    
                
                
              
            
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
