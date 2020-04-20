let appe = "https://cors-anywhere.herokuapp.com/";
let prev = '';
let cMode = '';
let pMode = '';
let nex = '';
let pres = '';
function deezerGet(url, mode){
    if(url == undefined) return;
    load();
    let req = new XMLHttpRequest();
    let list = document.getElementById("list");
    let style = document.getElementById("css");
    if(document.getElementById('numRes') != null) {
        let numRes = document.getElementById("numRes").value;
        pres = numRes;
        url += "&limit=" + numRes;
    }
    cMode = mode;
    console.log("url: " + url);
    let html = '';
    let css = '';
    req.onload = function(){
        if(req.status == 200){
            let json = JSON.parse(req.response);
            console.log(json);
            if(json.total != 0){
                if(mode === 'search' || mode == null || mode === 'track'){
                    for(i in json.data){
                        let n = parseInt(i) + 1;
                        let mins = parseInt(json.data[i].duration / 60);
                        html += '<li class="scene">\n<div class="song" onclick="return true">\n<div class="poster"></div>\n<div class="info">\n<header>\n<h1>' + json.data[i].title + '</h1>\n<span class="duration">' + mins + ' minutes</span>\n</header>\n<p class="para">\n<b>Artist:</b> ' + json.data[i].artist.name + '<br>\n<b>Album:</b> ' + json.data[i].album.title +'<br>\n<a href="' + json.data[i].link + '">Play on Deezer</a><br>\n</p>\n</div>\n</div>\n</li>\n';
                        css += '.scene:nth-child(' + n + ') .poster {\nbackground-image: url(' + json.data[i].album.cover + ');\nbackground-size:contain;\nbackground-color: #333333;\n}\n\n.scene:nth-child(' + n + ') .info header {\nbackground-image: url(' + json.data[i].album.cover + ');\nbackground-color: #333333;\nbackground-size: cover;\ncolor: white;\ntext-shadow: 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000\n}\n\n.scene:nth-child(' + n + ') .info {\nbackground-color: #333333;\nborder: #333333;\n}\n\n.scene:nth-child(' + n + ') .para {\ncolor: white;\n}';
                    }
                }else if(mode === 'album'){
                    for(i in json.data){
                        let n = parseInt(i) + 1;
                        html += '<li class="scene">\n<div class="song" onclick="return true">\n<div class="poster"></div>\n<div class="info">\n<header>\n<h1>' + json.data[i].title + '</h1>\n<span class="duration">' + json.data[i].nb_tracks + ' songs</span>\n</header>\n<p class="para">\n<b>Artist:</b> ' + json.data[i].artist.name +'<br>\n<a href="' + json.data[i].link + '">Deezer link</a>\n</p>\n</div>\n</div>\n</li>\n';
                        css += '.scene:nth-child(' + n + ') .poster {\nbackground-image: url(' + json.data[i].cover + ');\nbackground-size:contain;\nbackground-color: #333333;\n}\n\n.scene:nth-child(' + n + ') .info header {\nbackground-image: url(' + json.data[i].cover + ');\nbackground-color: #333333;\nbackground-size: cover;\ncolor: white;\ntext-shadow: 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000\n}\n\n.scene:nth-child(' + n + ') .info {\nbackground-color: #333333;\nborder: #333333;\n}\n\n.scene:nth-child(' + n + ') .para {\ncolor: white;\n}';
                    }
                }else if(mode === 'artist'){
                    for(i in json.data){
                        let n = parseInt(i) + 1;
                        html += '<li class="scene">\n<div class="song" onclick="return true">\n<div class="poster"></div>\n<div class="info">\n<header>\n<h1>' + json.data[i].name + '</h1>\n<span class="duration">' + json.data[i].nb_album + ' albums</span>\n</header>\n<p class="para">\n<b>fans:</b> ' + json.data[i].nb_fan +'<br>\n<a href="' + json.data[i].link + '">Deezer link</a>\n</p>\n</div>\n</div>\n</li>\n';
                        css += '.scene:nth-child(' + n + ') .poster {\nbackground-image: url(' + json.data[i].picture + ');\nbackground-size:contain;\nbackground-color: #333333;\n}\n\n.scene:nth-child(' + n + ') .info header {\nbackground-image: url(' + json.data[i].picture + ');\nbackground-color: #333333;\nbackground-size: cover;\ncolor: white;\ntext-shadow: 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000\n}\n\n.scene:nth-child(' + n + ') .info {\nbackground-color: #333333;\nborder: #333333;\n}\n\n.scene:nth-child(' + n + ') .para {\ncolor: white;\n}';
                    }
                    console.log(json);
                }else if(mode === 'rate'){
                    for(i in json.data){
                        html += '<div class="kS">\n<img src="' + json.data[i].cover + '">\n<p class="kST">' + json.data[i].title + ',  ' + json.data[i].artist.name + ', ' + json.data[i].position + '</p>\n</div>\n';
                    }
                    console.log(json);
                }else if(mode === 'playlist'){
                    for(i in json.tracks.data){
                        i = parseInt(i);
                        console.log(i);
                        html += '<div class="kS">\n<img src="' + json.tracks.data[i].album.cover + '">\n<p class="kST"><b>' + json.tracks.data[i].title + '</b>, ' + json.tracks.data[i].artist.name + '</p>\n</div>\n';
                    }
                    console.log(json)
                }
                if(json.next != null && json.next != undefined) nex = json.next;
                if(json.prev != null && json.prev != undefined) prev = json.prev;
                loadFin();
                list.innerHTML = html;
                style.innerHTML = css;
            }else{
                let container = document.getElementById("list");
                container.innerHTML = "<h1 class='noRes'>No Results found!</h1>"
            }
        }else if(req.status === 429){
            let container = document.getElementById("list");
            container.innerHTML = "<h1 class='noRes'>Too many requests made wait a while before retrying</h1>"
        }else console.log(req.status);
    }

    req.open('GET', appe + url);
    req.send();
    console.log("Sent")
}

function deezerRefresh(){
    if(document.getElementById('numRes') != null && document.getElementById('filter') != null) {
        let numRes = document.getElementById("numRes").value;
        let filt = document.getElementById('filter').value;
        if(numRes != pres || filt != cMode){
            deezerSearch();
        }
    }
}

function deezerRate(){
    let url = 'https://api.deezer.com/chart/0/albums';
    deezerGet(url, 'rate');
}

function deezerTrending(){
    let url = "https://api.deezer.com/chart/0/tracks";
    deezerGet(url, 'search');
}

function deezerNRel(){
    let url = 'https://api.deezer.com/playlist/3927420142?limit=25';
    deezerGet(url, 'playlist');
}

function deezerKeyList(){
    let text = document.getElementById('text');
    if(text == null || text == undefined){
        alert("null");
        return;
    }
    console.log("added");
    text.addEventListener('keyup', function(event){
        if(event.key === 'Enter') {
            console.log(1);
            deezerSearch();
        }
        console.log(event.key);
    });
}

function deezerSearch(){
    let text = document.getElementById("text").value;
    if(text === "" || text === null){
        deezerTrending();
        return;
    }
    let filter = document.getElementById('filter').value;
    let url = '';
    if(filter != "search") {
        url = "https://api.deezer.com/search/" + filter + "?q=" + text;
    }
    else {
        url = "https://api.deezer.com/search?q=" + text;
    }
    console.log("filter url:" + url);
    deezerGet(url, filter);
}

function deezerPrev(){
    if(prev != '' || prev != null || prev != undefined){
        deezerGet(prev, cMode);
    }
}

function deezerNext(){
    if(nex != '' || nex != null || nex != undefined){
        deezerGet(nex, cMode);
    }
}


/* html:
<div class="kS">\n
        <img src="' + nrels.data[i].cover + '">\n
        <p class="kST"><b>' + nrels.data[i].title + '</b>, ' + nrels.data[i].release_date</p>\n
    </div>\n
*/

/*Css:
        .scene:nth-child(' + n + ') .poster {\n
            background-image: url(' + json.data[i].cover + ');\n
            background-size:contain;\n
            background-color: #333333;\n
        }\n
\n
        .scene:nth-child(' + n + ') .info header {\n
            background-image: url(' + json.data[i].cover + ');\n
            background-color: #333333;\n
            background-size: cover;\n
            color: white;\n
            text-shadow: 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000, 0 0 1px #000000\n
        }\n
\n
        .scene:nth-child(' + n + ') .info {\n
            background-color: #333333;\n
            border: #333333;\n
        }\n
\n
        .scene:nth-child(' + n + ') .para {\n
            color: white;\n
        }
*/


//api id: 408142
//security key: 9b5c2607d04a83b671a4502ccd02217d