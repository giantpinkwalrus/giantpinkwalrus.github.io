var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})


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
        }
    },
}


function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    for(var i = 0; i < 3; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Cell'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl);
}

tableCreate();