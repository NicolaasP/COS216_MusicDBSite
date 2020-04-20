var dMonth;
var dYear;
function getDaysInMonth(month, year){
    month++;
    return new Date(year, month, 0).getDate();
}

function resMonthName(month){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if(month > 11 || month < 0) return;
    return months[month];
}

function genMonth(month, year){
    load();
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let days = getDaysInMonth(month, year);
    console.log(days);
    let j = 0;
    let tot = 1;
    if(days > 28) j = 5;
    else j = 4;
    let html = '<table cellpadding="0">\n';
    html += '<th>' + resMonthName(month) + ' - ' + year + '</th>\n'
    for(let i = 0; i < j; i++){
        html += '<tr>\n';
        for(let h = 0; h < 7; h++, tot++){
            if(tot > days) break;
            if(d === tot && m === month && y === year) html += '<td class="today" onclick="findDate()" id="' + tot + dMonth + dYear + '">' + tot + '</td>\n'
            else html += '<td onclick="findDate()" id="' + tot  + dMonth + dYear + '">' + tot + '</td>\n';
        }
        html += '</tr>\n';
    }
    html += '</table>';
    updateIds();
    return html;
}

function dateWriter(id, text){
    let day = document.getElementById(id);
    console.log(123);
    if(day == null || day == undefined) {
        return;
    }
    console.log(321);
    if(!day.innerHTML.includes(text)) day.innerHTML += '<br>' + text;
}


function displayC(){
    let now = new Date();
    let m = now.getMonth();
    let y = now.getFullYear();
    dMonth = m;
    dYear = y;
    let html = genMonth(m, y);
    let div = document.getElementById('cal');
    if(div == null || div == undefined){
        alert("div not found");
        return;
    }
    div.innerHTML = html;
}

function display(m, y){
    let html = genMonth(m, y);
    let div = document.getElementById('cal');
    if(div == null || div == undefined){
        alert("div not found");
        return;
    }
    div.innerHTML = html;
    dMonth = m;
    dYear = y;
}

function next(){
    if(dMonth == 11) {
        dYear++;
        dMonth = 0;
    }else dMonth++;
    display(dMonth, dYear);
}

function back(){
    if(dMonth == 0){
        dMonth = 11;
        dYear--;
    }else dMonth--;
    display(dMonth, dYear);
}

function updateIds(){
    deezerTrending();
}

function updateDates(){
    deezerGetRelDates(dMonth);
}