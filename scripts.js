
window.addEventListener('load', function(){
    const takeoff = document.getElementById('takeoff');
    const landing = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    const rocket = document.querySelector('img');
    let paddingForRocket = {
        vertical: 0,
        horizontal: 0
    };

    takeoff.addEventListener('click', function(){
       let confirm =  window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(confirm){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    landing.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = Number(0);
    });

    missionAbort.addEventListener('click', function(){
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if(confirm){
            flightStatus.innerHTML = 'Mission Aborted';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = Number(0);
    }});


        up.addEventListener('click', function(){
            rocket.style.position = 'relative';
            paddingForRocket.vertical -= 10;
            rocket.style.top = paddingForRocket.vertical + 'px';
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        });

        down.addEventListener('click', function(){
            rocket.style.position = 'relative';
            paddingForRocket.vertical += 10;
            rocket.style.top = paddingForRocket.vertical + 'px';
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
            
        });
    
        left.addEventListener('click', function(){
            rocket.style.position = 'relative';
            paddingForRocket.horizontal -= 10;
            rocket.style.left = paddingForRocket.horizontal + 'px';
        });
    
        right.addEventListener('click', function(){
            rocket.style.position = 'relative';
            paddingForRocket.horizontal += 10;
            rocket.style.left = paddingForRocket.horizontal + 'px';
        });
            
    });
