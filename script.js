document.addEventListener('DOMContentLoaded', () => {
    const lastUpdateTime = document.getElementById('last-update-time');
    lastUpdateTime.innerText = new Date().toLocaleString();

                        //HOMBRES PRINCIPIANTES
    const competitors = {
        beginnerMen: [
            { name: 'Juan Pérez',
                 score: 100,
                  events: ['Evento:1 - Reps:0 - Carril:2',
                     'Evento:2 - Reps:0 - Carril:2',
                      'Evento:3 - Reps:0 - Carril:2',
                       'Evento:4 - Reps:0 - Carril:2'],
                   heat: 'Heat 1' },
           
            
            { name: 'Carlos López',
                 score: 75,
                  events: ['Evento:1 - Reps:0 - Carril:1', 
                    'Evento:2  - Reps:0 - Carril:1',
                     'Evento:3  - Reps:0 - Carril:1', 
                     'Evento:4   - Reps:0 -Carril:1'],
                   heat: 'Heat 1' },
            

            {name: 'Jose Juan',
                 score: 150,
                 events: ['Evento:1 - Reps:0 - Carril:3 ', 
                    'Evento:2  - Reps:0 - Carril:3',
                    'Evento:3 - Reps:0 - Carril:3',
                     'Evento:4 - Reps:0 - Carril:3'],
                  heat: 'Heat 1' },


             {name: 'Angel Mirador',
                score: 10,
                events: ['Evento 1 - Reps:0 - Carril 4 ',
                     'Evento:2 - Reps:0 - Carril:4',
                      'Evento:3 - Reps:0 -Carril:4', 
                      'Evento 4  - Reps:0 -Carril:4'],
                    heat: 'Heat 1' },


              {name: 'Erick Fuentes',
                    score: 15,
                    events: ['Evento:1 - Reps:0 - Carril:1 ',
                         'Evento:2  - Reps:0 - Carril:1',
                          'Evento:3 - Reps:0 - Carril:1',
                           'Evento:4 - Reps:0 - Carril:1'],
                        heat: 'Heat 2' },

            {name: 'Javier Fuentes',
                score: 35,
                 events: ['Evento 1  - Reps:0 -Carril 2 ', 
                    'Evento:2 - Reps:0 - Carril:2',
                    'Evento:3 - Reps:0 -Carril:2',
                    'Evento:4 - Reps:0 - Carril:2'],
                  heat: 'Heat 2' },


            {name: 'Jose',
                 score: 156,
                    events: ['Evento:1 - Reps:0 - Carril 3 ', 
                        'Evento:2 - Reps:0 - Carril:3', 
                        'Evento:3 - Reps:0 - Carril:3', 
                        'Evento: 4 - Reps:0 - Carril:3'],
                    heat: 'Heat 2' },


             {name: 'Camilo Anda',
                 score: 150,
                events: ['Evento:1 Reps:0- Carril 4 ', 
                    'Evento:2 - Reps:0 - Carril:4', 
                    'Evento:3 - Reps:0 - Carril:4', 
                    'Evento:4 - Reps:0 - Carril:4'],
                     heat: 'Heat 2' },

        ],











                        //MUJERES PRINCPINANTES

        beginnerWomen: [

    //HEAT 1 INICIO 
            { name: 'Ana García',
                 score: 60,
                  events: ['Evento:1 - Reps:0 - Carril:1 ',
                     'Evento:2 - Reps:0 - Carril:1',
                      'Evento:3 - Reps:0 - Carri: 1', 
                      'Evento:4 - Reps:0 - Carril:1'],
                   heat: 'Heat 1' },
            
            { name: 'Laura Martínez',
                 score: 80,
                  events: ['Evento 1 - Reps:0 - Carril 2 ',
                     'Evento 2 - Reps:0 - Carril 2',
                      'Evento 3 - Reps:0 - Carril 2', 
                      'Evento 4 - Reps:0 -  Carril 2'], 
                  heat: 'Heat 2' },



            {name: 'Anita Sulia',
                score: 151,
                events: ['Evento 1 - Reps:0 - Carril 3 ',
                     'Evento 2 - Reps:0 - Carril 3', 
                     'Evento 3 - Reps:0 - Carril 3', 
                     'Evento 4 - Reps:0 - Carril 3'],
                 heat: 'Heat 1' },


            {name: 'Anita Sulia',
                score: 182,
                events: ['Evento 1 - Reps:0 - Carril 4 ',
                     'Evento 2 - Reps:0 - Carril 4',
                      'Evento 3 - Reps:0 - Carril 4', 
                      'Evento 4 - Reps:0 - Carril 4'],
                 heat: 'Heat 1' },

             //HEAT 1 FIN 
            
             //HEAT 2 INICIO 

              {name: 'Juana Felix',
                score: 114,
                events: ['Evento 1 - Reps:0 - Carril 1', 
                    'Evento 2 - Reps:0 - Carril 1',
                     'Evento 3 - Reps:0 - Carril 1',
                      'Evento 4 - Reps:0 - Carril 1'],
                 heat: 'Heat 2' },


              {name: 'Pedra Sanrda',
                score: 160,
                events: ['Evento 1 - Reps:0 - Carril 2',
                     'Evento 2 - Reps:0 - Carril 2',
                      'Evento 3 - Reps:0 - Carril 2',
                       'Evento 4 - Reps:0 - Carril 2'],
                 heat: 'Heat 2' },
            

             {name: 'Andrea Simple',
                score: 110,
                events: ['Evento 1 - Reps:0 - Carril 3 ', 
                    'Evento 2 - Reps:0 - Carril 3',
                     'Evento 3 - Reps:0 - Carril 3',
                      'Evento 4 - Reps:0 - Carril 3'],
                 heat: 'Heat 2' },


            
             {name: 'Esmeralda Fin',
                score: 50,
                events: ['Evento 1 - Reps:0 - Carril 4 ',
                     'Evento 2 - Reps:0 -Carril 4',
                      'Evento 3 - Reps:0 - Carril 4', 
                      'Evento 4 - Reps:0 - Carril 4'],
                 heat: 'Heat 2' },

                 //HEAT 2 FIN 
        ],










                         //HOMBRES INTERMEDIOS 
              
        intermediateMen: [
        //HEAT 1 HOMBRES INICIO
            { name: 'Miguel Rodríguez',
             score: 90, 
             events: ['Evento 1- Reps:0 - Carril 1 ', 
             'Evento 2 - Reps:0 - Carril 1',
              'Evento 3 - Reps:0 - Carril 1',
               'Evento 4 - Reps:0 - Carril 1'], 
             heat: 'Heat 1' },


             { name: 'Balam Suizo',
             score: 60, 
             events: ['Evento 1- Reps:0 - Carril 2 ',
              'Evento 2- Reps:0 - Carril 2', 
              'Evento 3- Reps:0 - Carril 2', 
              'Evento 4 - Reps:0 - Carril 2'], 
             heat: 'Heat 1' },


             { name: 'Enrique Hert',
             score: 92, 
             events: ['Evento 1 - Reps:0 - Carril 3 ',
              'Evento 2- Reps:0 - Carril 3',
               'Evento 3 - Reps:0 - Carril 3', 
               'Evento 4 - Reps:0 - Carril 3'], 
             heat: 'Heat 1' },


             { name: 'Josue Cantu',
             score: 9, 
             events: ['Evento 1- Reps:0 - Carril 4 ',
              'Evento 2 - Reps:0 - Carril 4',
               'Evento 3 - Reps:0 - Carril 4',
                'Evento 4 - Reps:0 - Carril 4'], 
             heat: 'Heat 1' },

             //HEAT 1 HOMBRES FIN 

            //HEAT 2 HOMBRES INICIO 

            { name: 'Conos ',
                score: 103, 
                events: ['Evento 1 - Reps:0 - Carril 2 ',
                 'Evento 2  - Reps:0 - Carril 2',
                  'Evento 3  - Reps:0 - Carril 2',
                   'Evento 4  - Reps:0 - Carril 2'], 
                heat: 'Heat 2' },

             
             { name: 'Cona Supo',
             score: 103, 
             events: ['Evento 1  - Reps:0 - Carril 2 ',
              'Evento 2  - Reps:0 - Carril 2',
               'Evento 3  - Reps:0 - Carril 2',
                'Evento 4  - Reps:0 -Carril 2'], 
             heat: 'Heat 2' },
             
             
             { name: 'Pepe Lopez',
             score: 90, 
             events: ['Evento 1 - Reps:0 - Carril 3 ',
              'Evento 2  - Reps:0 - Carril 3',
               'Evento 3  - Reps:0 - Carril 3', 
               'Evento 4 - Reps:0 - Carril 3'], 
             heat: 'Heat 2' },
             
             
             { name: 'ez',
             score: 90, 
             events: ['Evento 1  - Reps:0 - Carril 4 ',
              'Evento 2  - Reps:0 - Carril 4',
               'Evento 3  - Reps:0 - Carril 4',
                'Evento 4 - Reps:0 - Carril 4'], 
             heat: 'Heat 2' },

             //HEAT 2 HOMBRES FIN 


                        
        ],








                         //MUJERES INTERMEDIOS 

        intermediateWomen: [
             { name: 'Paola Comn',
             score: 90, 
             events: ['Evento 1 - Reps:0 - Carril 1 ', 
             'Evento 2 - Reps:0 - Carril 1',
              'Evento 3  - Reps:0 - Carril 1',
               'Evento 4  - Reps:0 - Carril 1'], 
             heat: 'Heat 1' },


               { name: 'Alessandra Bot ',
             score: 9, 
             events: ['Evento 1 - Reps:0 - Carril 2 ', 
             'Evento 2  - Reps:0 - Carril 2',
              'Evento 3 - Reps:0 - Carril 2',
               'Evento 4  - Reps:0 - Carril 2'], 
             heat: 'Heat 1' },


               { name: 'Esmeralda Ron',
             score: 110, 
             events: ['Evento 1  - Reps:0 - Carril 3 ', 
             'Evento 2  - Reps:0 - Carril 3',
              'Evento 3 - Reps:0 - Carril 3',
               'Evento 4  - Reps:0 -Carril 3'], 
             heat: 'Heat 1' },


               { name: 'Karen Funtes',
             score: 80, 
             events: ['Evento 1  - Reps:0 - Carril 4 ', 
             'Evento 2  - Reps:0 - Carril 4',
              'Evento 3  - Reps:0 - Carril 4',
               'Evento 4  - Reps:0 - Carril 4'], 
             heat: 'Heat 1' },

             //HEAT 1 FIN 
             // HEAT 2 INICIO 

               { name: 'Valentina FDi',
             score: 50, 
             events: ['Evento 1 - Reps:0 - Carril 1 ', 
             'Evento 2  - Reps:0 - Carril 1',
              'Evento 3 - Reps:0 - Carril 1',
               'Evento 4  - Reps:0 -Carril 1'], 
             heat: 'Heat 2' },


               { name: 'DanaE ',
             score: 125, 
             events: ['Evento 1 - Reps:0 - Carril 2 ', 
             'Evento 2 - Reps:0 - Carril 2',
              'Evento 3  - Reps:0 - Carril 2',
               'Evento 4 - Reps:0 - Carril 2'], 
             heat: 'Heat 2' },


               { name: 'Amareica Aguilas',
             score: 63, 
             events: ['Evento 1 - Reps:0 - Carril 3 ', 
             'Evento 2 - Reps:0 - Carril 3',
              'Evento 3  - Reps:0 - Carril 3',
               'Evento 4 - Reps:0 - Carril 3'], 
             heat: 'Heat 2' },


               { name: 'Anastasia Can',
             score: 90, 
             events: ['Evento 1  - Reps:0 - Carril 4 ', 
             'Evento 2 - Reps:0 - Carril 4',
              'Evento 3  - Reps:0 - Carril 4',
               'Evento 4 - Reps:0 - Carril 4'], 
             heat: 'Heat 2' },
        ]
    };








































    function populateTable(category, tableId) {
        const tableBody = document.querySelector(`#${tableId} tbody`);
        tableBody.innerHTML = '';
        const sortedCompetitors = competitors[category].sort((a, b) => b.score - a.score);
        sortedCompetitors.forEach(competitor => {
            const row = document.createElement('tr');
            row.addEventListener('click', () => {
                alert(`Nombre: ${competitor.name}\nPuntaje: ${competitor.score}\nEventos: ${competitor.events.join(', ')}\nHeat: ${competitor.heat}`);
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