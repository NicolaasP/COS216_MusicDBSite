let dMonth = 0;
let dYear = 1000;
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
    let html = '<table>\n';
    html += '<th>' + resMonthName(month) + ' - ' + year + '</th>\n'
    for(let i = 0; i < j; i++){
        html += '<tr>\n';
        for(let h = 0; h < 7; h++, tot++){
            if(tot > days) break;
            if(d === tot && m === month && y === year) html += '<td id="today">' + tot + '</td>\n'
            else html += '<td>' + tot + '</td>\n';
        }
        html += '</tr>\n';
    }
    html += '</table>';
    return html;
}

function displayC(){
    let now = new Date();
    let m = now.getMonth();
    let y = now.getFullYear();
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

function prev(){
    if(dMonth == 0){
        dMonth = 11;
        dYear--;
    }else dMonth--;
    display(dMonth, dYear);
}

/*html:
<table>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
</table>
*/