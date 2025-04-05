

let datapoints = document.getElementById("moveScore").getAttribute('value');

// Setup Block
// 
const circuference = 260; // deg

const ctx = document.getElementById('myChart').getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 520, 0);
gradient.addColorStop(0, "#0029FF");
gradient.addColorStop(0.1, "#4966FF");
gradient.addColorStop(0.2, "#65FFD1");
gradient.addColorStop(0.3, "#B18CFF");
gradient.addColorStop(0.4, "#9F71FF");
gradient.addColorStop(0.5, "#45E9FF");
gradient.addColorStop(0.6, "#65FFD1");

// background: linear-gradient(71.64deg, #0029FF 5.94%, #4966FF 18.43%, #65FFD1 32.58%, #65FFD1 47.45%, #B18CFF 60.64%, #9F71FF 72.26%, #45E9FF 88.65%, #45E9FF 113.86%);


// Config Block

const config = {
    type: 'doughnut',
    data: { labels: true, datasets: [{ label: true, data: [datapoints, 100 - datapoints], backgroundColor: [gradient, "transparent"], borderColor: ["transparent", "transparent"], borderWidth: 1, borderRadius: 30 }] },
    options: {
        rotation: 235,
        circumference: 250,
        borderRadius: 30,
        maintainAspectRatio: true,
        hover: { mode: null },
        animation: { duration: 5e3,
                     delay: (context) => {
                        let delay = 0;
                        if(context.type === 'data' && context.mode === 'default'){
                            delay = context.dataIndex * 400 + context.datasetIndex * 100; 
                            console.log(context.mode)
                        }
                     }
        },
        cutout: "92%",
        plugins: { legend: { display: false }, doughnutBackground: { enabled: true, color: "#E4E6E6" }, tooltip: { enabled: true } },

}
}



var n = document.getElementById("innerChart").getContext("2d");
new Chart(n, {
    type: "doughnut",
    data: { 
        labels: true,
        datasets: [{ 
                    label: "MOVE METER",
                    data: [22, 22, 22, 22], 
                    backgroundColor: "rgba(255, 255, 255, 0.2)", 
                    borderColor: "transparent", 
                    borderWidth: 6 
                }] },
    options: { 
        maintainAspectRatio: true,
        rotation: 235, 
        circumference: 250, 
        animation: true, 
        cutout: "97%", 
        plugins: { 
            legend: { display: false }, 
            doughnutBackground: { enabled: false, color: "#E4E6E6" }, 
            tooltip: { enabled: true } } },
});
var openMeter = $(".meter-box2");
var subBtn2 = $("#mm-calculate");



// Render Init

const chart = new Chart(ctx, config);


(function() { // self calling function replaces document.ready()

    //adding event listenr to button
        document.querySelector('#mm-calculate').addEventListener('click',function(){
    
        // chart.destroy();
        // const chart = new Chart(myChart, config);
            chart.reset();
            chart.update();

        var count = document.getElementById("moveScore");
        var upto = 0;
        // Meter Count
        let counts = setInterval(updated, 40);
        function updated() {

            count.innerHTML = ++upto;

            if(count.innerHTML == datapoints) {
                clearInterval(counts);
            } 
        }

    });
    
    })();

    








