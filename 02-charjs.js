let ctx = document.getElementById("migrafico").getContext('2d');
let ctx1 = document.getElementById("migrafico1").getContext('2d');
let ctx2 = document.getElementById("migrafico2").getContext('2d');
let ctx3 = document.getElementById("migrafico3").getContext('2d');



let migrafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Solteros', 'Casados', 'Viudos', 'divorciados', 'conviviente'],
        datasets: [{
            label: '# de personas con estado civil',
            data: [12, 19, 3, 5, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var myRadarChart = new Chart(ctx1, {
    type: 'radar',
    data: {
        labels: ['Solteros', 'Casados', 'Viudos', 'divorciados', 'conviviente'],
        datasets: [{
            label: '# de personas con estado civil',
            data: [12, 19, 3, 5, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
var myPieChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Solteros', 'Casados', 'Viudos', 'divorciados', 'conviviente'],
        datasets: [{
            label: '# de personas con estado civil',
            data: [12, 19, 3, 5, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var migrafico3 = new Chart(ctx3, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Bar Dataset',
            data: [10, 5, 30, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            // this dataset is drawn below
            order: 1
        }, {
            label: 'Line Dataset',
            data: [10, 23, 1, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0)'
            ],
            borderColor: [
               
                'rgba(54, 162, 235, 1)'
            ],
            type: 'line',
            // this dataset is drawn on top
            order: 2
        },{
            label: 'Line Dataset',
            data: [12, 50, 40, 90],
            backgroundColor: [
                'rgba(255, 0, 132, 0)'
            ],
            borderColor: [
               
                'rgba(54, 1, 235, 1)'
            ],
            type: 'line',
            // this dataset is drawn on top
            order: 3
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options:{
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
let r30 =()=>{
    return Math.random()*(30-0)+0;
}

setInterval(()=>{
    migrafico3.data.datasets[0].data=[r30(),r30(),r30(),r30(),r30()];
    migrafico3.data.datasets[1].data=[r30(),r30(),r30(),r30(),r30()];
    migrafico3.data.datasets[2].data=[r30(),r30(),r30(),r30(),r30()];

    migrafico3.update();
},1000)

setInterval(()=>{
    migrafico.data.datasets[0].data=[r30(),r30(),r30(),r30(),r30()];

    migrafico.update();
},1000)
