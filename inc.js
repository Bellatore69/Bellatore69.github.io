function include(contenu) {
    console.log(contenu);
    fetch(contenu+'.html').then(function (response) {
        return response.text();
    }).then(function (html) {
        document.getElementById('include').innerHTML = html;
    });
}