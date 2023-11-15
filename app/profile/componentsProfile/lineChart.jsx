import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

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

let beneficios = [0, 21, 20, 15, 2, 11, 20, 21, 25, 13, 11];
let meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Monthly Streak',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(67, 175, 186)',
            backgroundColor: 'rgba(67, 175, 186, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(67, 175, 186)',
            pointBackgroundColor: 'rgba(67, 175, 186)',
        },

    ],
};

let misoptions = {
    scales : {
        y : {
            min : 0,
            max : 31
        },
        x: {
            ticks: { color: 'rgb(0,0,0)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}