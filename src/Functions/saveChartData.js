import { convertDate } from "./convertDate";
import { convertNumber } from "./convertNumber";

export const saveChartData =async (setChartData, prices1, prices2=null) => {
  const chartData = {
    labels: prices1.map((val) => convertDate(val[0])),
    datasets: [
      {
        label: "Crypto1",
        data: prices1.map((val) => val[1]),
        borderWidth: 2,
        fill: false,
        tension: 0.25,
        backgroundColor: "rgba(58,128,233,0.1)",
        borderColor: "#3a80e9",
        pointRadius: 0,
        yAxisID: "crypto1"
      },
    ],
  };

  if (prices2) {
    chartData.datasets.push({
      label: "Crypto2",
      data: prices2.map((val) => val[1]),
      borderWidth: 2,
      fill: false,
      tension: 0.25,
      backgroundColor: "rgba(58,128,233,0.1)",
      borderColor: "#61c96f",
      pointRadius: 0,
      yAxisID: "crypto2"
    });
  }

  setChartData(chartData);
}