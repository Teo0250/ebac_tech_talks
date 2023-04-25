AOS.init(); 

const dateEvent = new Date("May 18, 2023 19:00:00");
const timeStampEvent = dateEvent.getTime();
const countTime = setInterval(function() {
    const now = new Date();
    const timeStampActualy = now.getTime();

    const distanceEvent = timeStampEvent - timeStampActualy;
    const daysInMS = 1000 * 60 * 60 * 24
    const hourInMS = 1000 * 60 * 60
    const minutesInMS = 1000 * 60 

    const daysAtEvent = Math.floor(distanceEvent / daysInMS);
    const hoursAtEvent = Math.floor((distanceEvent % daysInMS) / hourInMS);
    const minutesAtEvent = Math.floor((distanceEvent % hourInMS) / minutesInMS);
    const secondAtEvent = Math.floor((distanceEvent % minutesInMS) / 1000);

    // console.log(daysAtEvent, hoursAtEvent, minutesAtEvent, secondAtEvent)

    document.getElementById('contador').innerHTML = `${daysAtEvent}d ${hoursAtEvent}h ${minutesAtEvent}m ${secondAtEvent}s` 

    if (distanceEvent < 0) {
        clearInterval(countTime);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);