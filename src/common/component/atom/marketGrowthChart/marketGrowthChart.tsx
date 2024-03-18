import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

interface MarketGrowthChartProps {
  data: number[];
  labels: string[];
  chartLabel: string;
}

const MarketGrowthChart: React.FC<MarketGrowthChartProps> = ({
  data,
  labels,
  chartLabel,
}) => {
  ChartJS.register(
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
  );
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: chartLabel,
        data: data,
        backgroundColor: [
          "#07004D",
          "#35B34A",
          "#D4A129",
          "#6494EB",
          "#A033C8",
          "#3D3DB9",
          "#63AAA9",
          "#6699CC",
        ],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          type: "category",
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="w-full md:col-span-2 relative md:h-[30rem] h-[20rem] m-auto p-4 border rounded-md border-white">
      <Bar data={chartData} options={options as any} />
    </div>
  );
};

export default MarketGrowthChart;
