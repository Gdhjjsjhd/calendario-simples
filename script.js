   document.getElementById('mes').innerHTML = new Date()
    .toLocaleString(navigator.language, { month: 'long'});

    document.getElementById('semana').innerHTML = new Date()
    .toLocaleString(navigator.language, { weekday: 'long'});

    document.getElementById('dia').innerHTML = new Date().getDate();
    document.getElementById('ano').innerHTML = new Date().getFullYear();