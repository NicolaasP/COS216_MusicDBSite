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
    let css = document.getElementById('css');
    console.log(css);
    req.onload = function () {
        if (this.status === 200) {
            console.log(req.response);
            let json = JSON.parse(req.response);
            console.log(json);
            let html = '';
            let style = ''
            for (i in json.tracks.track) {
                let n = parseInt(i) + 1;
                console.log(json.tracks.track[i].image[0]["#text"]);
                html += '<li class="scene">\n<div class="song" onclick="return true">\n<div class="poster"></div>\n<div class="info">\n<header>\n<h1>' + json.tracks.track[i].name + '</h1>\n<span class="duration">' + json.tracks.track[i].playcount + ' plays</span>\n</header>\n<p class="para">\n<b>Artist:</b> ' + json.tracks.track[i].artist.name + '<br>\n\n</p>\n</div>\n</div>\n</li>\n';
                style += '.scene:nth-child(' + n + ') .poster {\nbackground-image: url(' + json.tracks.track[i].image[0]["#text"] + ');\nbackground-size:contain;\nbackground-color: #333333;\n}\n\n.scene:nth-child(' + n + ') .info header {\nbackground-image: url(' + json.tracks.track[i].image[1]["#text"] + ');\nbackground-color: #333333;\nbackground-size: cover;\ncolor: white;\ntext-shadow: 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000\n}\n\n.scene:nth-child(' + n + ') .info {\nbackground-color: #333333;\nborder: #333333;\n}\n\n.scene:nth-child(' + n + ') .para {\ncolor: white;\n}';
            }
            loadFin();
            console.log(css)
            if (list != null && list != undefined) list.innerHTML = html;
            if (css != null && css != undefined) css.innerHTML = style;
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
<li class="scene">\n
    <div class="song" onclick="return true">\n
        <div class="poster"></div>\n<div class="info">\n<header>\n
            <h1>' + json.tracks.track[i].name + '</h1>\n
            <span class="duration">' + json.tracks.track[i].playcount + ' plays</span>\n</header>\n
            <p class="para">\n<b>Artist:</b> ' + json.tracks.track[i].artist.name +'<br>\n\n
            </p>\n
        </div>\n
    </div>\n
    </li>\n
*/