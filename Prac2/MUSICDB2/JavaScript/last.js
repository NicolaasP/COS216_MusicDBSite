/*
API key	69d64479b3c18a4f09c4aaca6c05c095
Shared secret	6e05a8966f61c51fed8926f245499dba
*/

let appe = 'https://cors-anywhere.herokuapp.com/';
const key = '69d64479b3c18a4f09c4aaca6c05c095';

function lastGet(url, mode){
    load();
    let req = new XMLHttpRequest();
    let list = document.getElementById('list');
    req.onload = function(){
        if(this.status === 200){
            console.log(req.response);
            let json = JSON.parse(req.response);
            console.log(json);
            let html = '';
            for(i in json.tracks.track){
                console.log(json.tracks.track[i].image[1]["#text"]);
                html += '<div class="kS">\n<img src="' + json.tracks.track[i].image[1]["#text"] + '">\n<p class="kST"><b>' + json.tracks.track[i].name + '</b>, ' + json.tracks.track[i].artist.name + ', ' + json.tracks.track[i].playcount + ',</p>\n</div>\n';
            }
            loadFin();
            list.innerHTML = html;
        }
    }

    req.open('GET', appe + url);
    req.send();
}

function lastFeat(){
    let url = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=' + key + '&format=json';
    lastGet(url, 'a');
}

/*html:
<div class="kS">\n
        <img src="' + json.tracks.track[i].image[1].text + '">\n
        <p class="kST"><b>' + json.tracks.track[i].name + '</b>, ' + json.tracks.track[i].artist.name + ', ' + json.tracks.track[i].playcount + ',</p>\n
    </div>\n
*/