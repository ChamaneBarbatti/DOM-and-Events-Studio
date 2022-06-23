window.addEventListener('load', function () {
    const takeOff = document.getElementById('takeoff');
    const status = document.getElementById('flightStatus');
    const sBackground = document.getElementById('shuttleBackground');
    const sHeight = document.getElementById('spaceShuttleHeight');


    takeOff.addEventListener('click',function(){
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(result){
            status.innerHTML= 'Shuttle in flight.';
            sBackground.style.backgroundColor = 'blue';
            sHeight.innerHTML = 10000;
        }

    })
});