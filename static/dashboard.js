document.addEventListener("DOMContentLoaded", function () {
   
    const labels1 = ["January", "February", "March", "April", "May"];
    const data1 = [65, 59, 80, 81, 56];

    const labels2 = ["June", "July", "August", "September", "October"];
    const data2 = [45, 70, 42, 60, 75];

    const labels3 = ["Red", "Blue", "Yellow"];
    const data3 = [30, 45, 25];
    const colors3 = ["#FF6384", "#36A2EB", "#FFCE56"];

    const ctx1 = document.getElementById("chart1").getContext("2d");
    const chart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: labels1,
            datasets: [
                {
                    label: "Data 1",
                    data: data1,
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    const ctx2 = document.getElementById("chart2").getContext("2d");
    const chart2 = new Chart(ctx2, {
        type: "line",
        data: {
            labels: labels2,
            datasets: [
                {
                    label: "Data 2",
                    data: data2,
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    const ctx3 = document.getElementById("chart3").getContext("2d");
    const chart3 = new Chart(ctx3, {
        type: "doughnut",
        data: {
            labels: labels3,
            datasets: [
                {
                    data: data3,
                    backgroundColor: colors3,
                },
            ],
        },
    });
});
