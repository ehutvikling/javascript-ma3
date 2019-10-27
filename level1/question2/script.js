//Console.log out elements in JSON file

var myObj = {
    "video": [{
        "id": 12312412312,
        "name": "Ecuaciones Diferenciales",
        "url": "/video/math/edo/12312412312",
        "author": {
            "data": [{
                "name_author": "Alejandro Morales",
                "url": "/author/alejandro-morales",
                "type": "master"
            }]
        }
    }]
}

function printInfo() {
    var firstVideo = myObj.video[0]
    console.log("id: " + firstVideo.id);
    console.log("name: " + firstVideo.name);
    console.log("url: " + firstVideo.url);

    for (var i = 0; i < firstVideo.author.data.length; i++) {
        var author = firstVideo.author.data[i];
        console.log("name author: " + author.name_author);
        console.log("auther url: " + author.url);
        console.log("author type: " + author.type);
    }
}

printInfo();
