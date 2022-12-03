const body = document.querySelector("body"),
    sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
    sidebar.classList.toggle("close");
}

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
    } else {
        localStorage.setItem("status", "open");
    }
})

// Gráficos
const ctx = document.getElementById('myChartone');
const ctxa = document.getElementById('myCharttwo');
const ctxb = document.getElementById('myCharttree');

const data = {
    datasets: [{
        data: [23, 15, 19],
        backgroundColor: [
            'rgb(225, 0, 255)',
            'rgb(108, 0, 185)',
            'rgb(106, 0, 245)'
        ],
        hoverOffset: 4
    }]
};

new Chart(ctx, {
    type: 'doughnut',
    data: data
});

const data2 = {
    datasets: [{
        data: [14, 21, 13],
        backgroundColor: [
            'rgb(225, 0, 255)',
            'rgb(108, 0, 185)',
            'rgb(106, 0, 245)'
        ],
        hoverOffset: 4
    }]
};

new Chart(ctxa, {
    type: 'doughnut',
    data: data2
});

const data3 = {
    datasets: [{
        data: [27, 20, 13],
        backgroundColor: [
            'rgb(225, 0, 255)',
            'rgb(108, 0, 185)',
            'rgb(106, 0, 245)'
        ],
        hoverOffset: 4
    }]
};

new Chart(ctxb, {
    type: 'doughnut',
    data: data3
});

b_usuario.innerHTML = sessionStorage.NOME_USUARIO;