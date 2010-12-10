var RecentModules = function () {
    this.url = 'http://search.cpan.org/uploads.rdf';
};

RecentModules.prototype.load = function (callback) {
    var ua   = Ti.Network.createHTTPClient();
    ua.onload = function () {
        var modules  = [];
        var response = this.responseText;
        var matches  = response.match(/<rdf:li rdf:resource="http:\/\/search.cpan.org\/~[^\/]+\/[^"]+?" \/>/g);
        matches.forEach(function (i) {
            var urls   = i.match(/(http:[^"]+)/g);
            var url    = urls[0];
            var names  = url.match(/([^\/]+\/$)/g);
            var name   = names[0].replace(/-[^\-]+$/, '')
                .replace(/-/g, '::');
            var module = {
                name: name,
                url : 'http://search.cpan.org/perldoc?' + name
            };
            modules.push(module);
        });
        callback(modules);
    };
    ua.onerror = function () {
        alert('failed to fetch module list');
    };
    ua.open('GET', this.url, false);
    ua.send();
};
