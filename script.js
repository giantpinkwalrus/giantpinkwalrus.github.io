var timeSlots = ['8', '10', '12', '14', '16', '18', '20', '22'];
var sunTimeSlots = [];
var friLocalTimes = [];
var sunLocalTimes = [];

for(var i = 0; i < timeSlots.length; i++) {
    friLocalTimes.push(new Date(Date.parse('15 July 2016 ' + timeSlots[i] +':00:00 PDT')));
}

console.log(friLocalTimes);

var urlStart = 'twitch.tv/'
var event = {
    friday: {
        srkevo1: {
            '8': 'Street Fighter V',
            '10': '',
            '12': 'Super Smash Bros. Melee',
            '14': '',
            '16': 'Tekken 7 FR Semifinal',
            '20': 'SSB Melee Pools Round 2',
            '22': ''
        },
        srkevo2: {
            '8': 'Super Smash Bros. Wii U',
            '10': '',
            '12': '',
            '14': '',
            '16': '',
            '20': 'SSB Wii U Pools Round 2',
            '22': ''
        },
        srkevo3: {
            '8': 'Pokken Tournament',
            '10': '',
            '12': '',
            '14': '',
            '16': '',
            '20': 'SSB Melee Pools Round 2',
            '22': ''
        },
        capcomfighters: {
            '8': 'Street Fighter V',
            '10': '',
            '12': '',
            '14': '',
            '16': '',
            '20': '',
            '22': ''
        }
    },
}


function tableCreate(day){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';
    var tHead = tbl.createTHead();
    var tHeadRow = tHead.insertRow();
    tHeadRow.insertCell();
    for(var j = 0; j < timeSlots.length; j++) {
        var th = tHeadRow.insertCell();
        th.appendChild(document.createTextNode(friLocalTimes[j].getHours()))
    }
    for(var stream in day ){
        var tr = tbl.insertRow();
        var streamName = tr.insertCell();
            streamName.appendChild(document.createTextNode(urlStart + stream));
            streamName.style.border = '1px solid black';
        for(var time in day[stream]){
            var game = day[stream][time];
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(game));
                td.style.border = '1px solid black';
            }
        }
    body.appendChild(tbl);
}

tableCreate(event.friday);