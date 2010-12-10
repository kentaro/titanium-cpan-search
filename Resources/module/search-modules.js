Ti.include('../module/table.js');

var ModuleSearcher = function (word) {
    this.url = 'http://search.cpan.org/search?m=module&s=1&n=100';
};

ModuleSearcher.prototype.search = function (word, callback) {
    var ua = Ti.Network.createHTTPClient();
    ua.onload = function () {
        var modules  = [];
        var response = this.responseText;
        var matches  = response.match(/<h2 class=sr><a href="\/~[^\/]+\/[^\/]+\/lib\/[^"]+">/g);
        if (matches) {
            matches.forEach(function (i) {
                var name  = i.replace(/^<h2 class=sr><a href="\/~[^\/]+\/[^\/]+\/lib\//, '')
                             .replace(/\.pm">$/, '')
                             .replace(/\//g, '::');
                var module = {
                    name: name,
                    url : 'http://search.cpan.org/perldoc?' + name
                };
                modules.push(module);
            });
            callback(modules);
        }
    };
    ua.onerror = function () {
        alert('failed to search modules');
    };
    ua.open('GET', this.url, true);
    ua.send({q: word});
};
