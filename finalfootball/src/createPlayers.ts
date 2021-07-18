namespace final {
     
    export function createParticipants(playerArray: Participant[], ball: Ball, width: number,  height: number, colorTeam1 :string, colorTeam2: string, minSpeed: number, maxSpeed: number,minPrecision: number, maxPrecision: number): void {


        let playerVelocity: Vector = new Vector(0, 0);

        interface PlayerSkills {
            name: string;
            shirt: string;
            number: number;
            speed: number;
            playerPrecision: number;
            team: number;
        }

        let playerSkills: PlayerSkills[] = [

            //players team one
            {
                name: "Hans",
                shirt: colorTeam1,
                number: 1,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1  
            },
           
            {
                name:  "Peter",
                shirt: colorTeam1,
                number: 2,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1    
            },

            {
                name:  "Herrmann",
                shirt: colorTeam1,
                number: 3,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1   
            },

            {
                name: "Rolf",
                shirt: colorTeam1,
                number: 4,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1    
            },

            {
                name: "Kasper",
                shirt: colorTeam1,
                number: 5,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1    
            },

            {
                name: "Helmut",
                shirt: colorTeam1,
                number: 6,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1    
            },

            {
                name:  "Josef",
                shirt: colorTeam1,
                number: 7,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1    
            },

            {
                name:  "Paul",
                shirt: colorTeam1,
                number: 8,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1    
            },

            {
                name:  "Sebastian",
                shirt: colorTeam1,
                number: 9,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1    
            },

            {
                name:  "Max",
                shirt: colorTeam1,
                number: 10,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1    
            },

            {
                name:  "Karl",
                shirt: colorTeam1,
                number: 11,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 1    
            },

            //players team two
            {
                name:  "Smith",
                shirt: colorTeam2,
                number: 15,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2   
            },

            {
                name: "Miller",
                shirt: colorTeam2,
                number: 16,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2    
            },

            {
                name: "Johnson",
                shirt: colorTeam2,
                number: 17,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2    
            },

            {
                name:  "Harrison",
                shirt: colorTeam2,
                number: 18,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2  
            },

            {
                name:  "Fisher",
                shirt: colorTeam2,
                number: 19,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2   
            },

            {
                name:  "Mayer",
                shirt: colorTeam2,
                number: 20,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2    
            },

            {
                name:  "Jefferson",
                shirt: colorTeam2,
                number: 21,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2   
            },

            {
                name:  "Kirschenbaum",
                shirt: colorTeam2,
                number: 22,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2   
            },

            {
                name:  "Potter",
                shirt: colorTeam2,
                number: 23,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2   
            },

            {
                name: "Grey",
                shirt: colorTeam2,
                number: 24,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2   
            },

            {
                name:  "Boyardee",
                shirt: colorTeam2,
                number: 25,
                speed: getRandomInt(minSpeed, maxSpeed),
                playerPrecision: getRandomInt(minPrecision, maxPrecision),
                team: 2   
            }
        ];


        //player positions left team
        let startPositionArrayTeam1: Vector[] = [
            new Vector(width * 0.47 + Participant.radius , height * 0.3 + Participant.radius ),
            new Vector(width * 0.47 + Participant.radius, height * 0.7 + Participant.radius),
            
            new Vector(width * 0.35 + Participant.radius , height * 0.25 + Participant.radius ),
            new Vector(width * 0.35 + Participant.radius , height * 0.75 + Participant.radius ),
            new Vector(width * 0.4 + Participant.radius , height * 0.5 + Participant.radius ),
            new Vector(width * 0.3 + Participant.radius , height * 0.5 + Participant.radius ), 
            
            new Vector(width * 0.2 + Participant.radius , height * 0.23 + Participant.radius ),
            new Vector(width * 0.2 + Participant.radius , height * 0.77+ Participant.radius ),
            new Vector(width * 0.25 + Participant.radius , height * 0.35 + Participant.radius ),
            new Vector(width * 0.25 + Participant.radius , height * 0.65 + Participant.radius ),

            new Vector(width * 0.15 + Participant.radius , height * 0.5 + Participant.radius )
        ];

        //player positions right team
        let startPositionArrayTeam2: Vector[] = [
            new Vector(width * 0.53 + Participant.radius , height * 0.3 + Participant.radius ),
            new Vector(width * 0.53 + Participant.radius , height * 0.7 + Participant.radius ),
            
            new Vector(width * 0.65 + Participant.radius , height * 0.25 + Participant.radius ),
            new Vector(width * 0.65 + Participant.radius , height * 0.75 + Participant.radius ),
            new Vector(width * 0.6 + Participant.radius , height * 0.5 + Participant.radius ),
            new Vector(width * 0.7 + Participant.radius , height * 0.5 + Participant.radius ), 
            
            new Vector(width * 0.8 + Participant.radius , height * 0.23 + Participant.radius ),
            new Vector(width * 0.8 + Participant.radius , height * 0.77 + Participant.radius ),
            new Vector(width * 0.75 + Participant.radius , height * 0.35 + Participant.radius ),
            new Vector(width * 0.75 + Participant.radius , height * 0.65 + Participant.radius ),

            new Vector(width * 0.85 + Participant.radius , height * 0.5 + Participant.radius )
        ];


        for (let i: number = 0; i < startPositionArrayTeam1.length; i++) {

            let player: Player = new Player((startPositionArrayTeam1[i]), playerVelocity, playerSkills[i].shirt, playerSkills[i].name, playerSkills[i].number, playerSkills[i].playerPrecision, playerSkills[i].speed, playerSkills[i].team);
            player.draw();
            playerArray.push(player);
        }

        for (let j: number = 0; j < startPositionArrayTeam2.length; j++) {

            let player: Player = new Player((startPositionArrayTeam2[j]), playerVelocity, playerSkills[j + 11].shirt, playerSkills[j + 11].name, playerSkills[j + 11].number, playerSkills[j + 11].playerPrecision, playerSkills[j + 11].speed, playerSkills[j + 11].team);
            player.draw();
            playerArray.push(player);
        }
        
        let positionRefereeTop =  new Vector(425+ Participant.radius, 15+ Participant.radius);
        let topReferee = new Referee(positionRefereeTop, playerVelocity, "#32A4A8", ball, true);
        playerArray.push(topReferee);

        let positionRefereeRight =  new Vector(15+ Participant.radius, 225 + Participant.radius);
        let rightReferee = new Referee(positionRefereeRight, playerVelocity, "#32A4A8", ball, false);
        playerArray.push(rightReferee);
    }

    function getRandomInt(min : number, max : number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
}