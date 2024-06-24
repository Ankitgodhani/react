import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Chart() {
    const data = {
        labels: [0, 1, 2, 3, 4],
        datasets: [
            {
                label: 'Series 1',
                data: [1, 2, 4, 2, 7],
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)'
            },
            {
                label: 'Series 2',
                data: [3, 1, 5, 6, 4],
                borderColor: 'rgb(153, 102, 255)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)'
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
        }
    };

    return (
        <div
            style={{
                width: '50%',
                height: '50%'
            }}
        >
            <Line data={data} options={options} />
        </div>
    )
}


export default Chart