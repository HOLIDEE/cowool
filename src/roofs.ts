/// <reference types="@workadventure/iframe-api-typings/iframe_api" />

console.info('Roofs Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    WA.room.area.onEnter("roof_coworking_area").subscribe(() => {
        hideRoof1();
    });
    WA.room.area.onLeave("roof_coworking_area").subscribe(() => {
        showRoof1();
    });
    WA.room.area.onEnter("silentOffice_area").subscribe(() => {
        WA.room.showLayer("silentOverlay");
    });
    WA.room.area.onLeave("silentOffice_area").subscribe(() => {
        WA.room.hideLayer("silentOverlay"); 
    });

    /*
    WA.room.onEnterLayer("doorstep/zone_office").subscribe(() => {
        const players = WA.players.list();
        console.log("players");
        console.log(players);
        let admin: any;
        for (const player of players) {
            console.log(`Player ${player.name} is near you`);
            console.log(player);
            console.log(player.state.outlineColor);
            if(player.state._outlineColor == 1780289) {
                admin++
            }
        }
        if(admin != 0) {
            console.log("There is no admin");
        }
    }); 
      */
}).catch(e => console.error(e));

const hideRoof1 = () => {
    WA.room.hideLayer("roof1");
    WA.room.hideLayer("sign1");
}
const showRoof1 = () => {
    WA.room.showLayer("roof1");
    WA.room.showLayer("sign1");
}

export {}
