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
import classNames from "@/common/utils/classNames";

interface MarketGrowthChartProps {
  data: number[];
  labels: string[];
  backgroundColors: string[];
  chartLabel: string;
  className?: string;
}

const MarketGrowthChart: React.FC<MarketGrowthChartProps> = ({
  data,
  labels,
  chartLabel,
  backgroundColors,
  className,
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
        backgroundColor: backgroundColors,
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
    <div
      className={classNames(
        "w-full md:col-span-2 relative md:h-[30rem] h-[20rem] m-auto p-4 flex border rounded-md border-white",
        { className }
      )}
    >
      <Bar data={chartData} options={options as any} />
    </div>
  );
};

export default MarketGrowthChart;
