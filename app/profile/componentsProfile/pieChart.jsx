import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ userData }) {
    const estadisticas2 = userData?.estadisticas2 || "[]";

    // Convertir la cadena a un array de números
    const mealsPercentageData = JSON.parse(estadisticas2);

    let options = {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
            y: {
                display: false,
            },
            x: {
                display: false,
            },
        },
    };

    let data = {
        labels: ['Breakfast', 'Lunch', 'Dinner'],
        datasets: [
            {
                label: 'Meals Percentage ',
                data: mealsPercentageData,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ width: '300px', height: '300px' }}>
            <Pie data={data} options={options} />
        </div>
    );
}
