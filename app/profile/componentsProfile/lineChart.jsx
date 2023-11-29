import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function LinesChart({ userData }) {
    const estadisticas1 = userData?.estadisticas1 || "[]";

    // Convertir la cadena a un array de números
    const beneficios = JSON.parse(estadisticas1);

    console.log(beneficios);
    const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const data = {
        labels: meses,
        datasets: [
            {
                label: 'Monthly Streak',
                data: beneficios,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(67, 175, 186)',
                backgroundColor: 'rgba(67, 175, 186, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(67, 175, 186)',
                pointBackgroundColor: 'rgba(67, 175, 186)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                min: 0,
                max: 31
            },
            x: {
                ticks: { color: 'rgb(0,0,0)' }
            }
        }
    };

    return <Line data={data} options={options} />;
}
