document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    logo.addEventListener('click', () => {
        logo.style.display = 'none';
    });

    setTimeout(() => {
        logo.style.display = 'none';
    }, 3000);

    const lastUpdateTime = document.getElementById('last-update-time');
    lastUpdateTime.innerText = new Date().toLocaleString();

    const competitors = {
        beginnerMen: [
            { name: 'Juan Pérez', score: 100, events: ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4'], heat: 'Heat 1' },
            { name: 'Carlos López', score: 700, events: ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4'], heat: 'Heat 2' }
        ],
        beginnerWomen: [
            { name: 'Ana García', score: 60, events: ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4'], heat: 'Heat 1' },
            { name: 'Laura Martínez', score: 80, events: ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4'], heat: 'Heat 2' }
        ],
        intermediateMen: [
            { name: 'Miguel Rodríguez', score: 90, events: ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4'], heat: 'Heat 1' },
            { name: 'David Fernández', score: 100, events: ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4'], heat: 'Heat 2' }
        ],
        intermediateWomen: [
            { name: 'María González', score: 85, events: ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4'], heat: 'Heat 1' },
            { name: 'Lucía Sánchez', score: 95, events: ['Evento 1', 'Evento 2', 'Evento 3', 'Evento 4'], heat: 'Heat 2' }
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

function toggleImage(viewerId) {
    const viewer = document.getElementById(`image-viewer-${viewerId}`);
    viewer.style.display = viewer.style.display === 'flex' ? 'none' : 'flex';
}
