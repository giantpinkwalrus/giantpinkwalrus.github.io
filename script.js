new Date(Date.parse('15 July 2016 08:00:00 PDT'));
var timeSlots = [8, 10, 12, 14, 16, 18, 20, 22, 24];
var sunTimeSlots = [];
var friLocalTimes = [];
var sunLocalTimes = [];

for(var i = 0; i < timeSlots.length; i++) {
    friLocalTimes.push(new Date(Date.parse('15 July 2016' + timeSlots[i] +':00:00 PDT')));
}

console.log(friLocalTimes);

var urlStart = 'twitch.tv/'
var event = {
    friday: {
        srkevo1: {
            '8': 'Street Fighter V',
            '10': 'Super Smash Bros. Melee',
            '16': 'Tekken 7 FR Semifinal',
            '20': 'SSB Melee Pools Round 2'
        },
        srkevo2: {
            '8': 'Super Smash Bros. Wii U',
            '20': 'SSB Wii U Pools Round 2'
        },
        srkevo3: {
            '8': 'Pokken Tournament',
            '20': 'SSB Melee Pools Round 2'
        },
        capcomfighters: {
            '8': 'Street Fighter V'
        },
    endTime: 24;
    },
}