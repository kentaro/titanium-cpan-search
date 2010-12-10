var Table = function (modules, searchBar) {
    this.modules   = modules;
    this.searchBar = searchBar;
};

Table.prototype.build = function () {
    var table = Titanium.UI.createTableView({search:this.searchBar});
    this.modules.forEach(function (module) {
        var row = Titanium.UI.createTableViewRow();
            row.title = module.name;
            row.hasDetail = true;
            row.addEventListener('click', function () {
                var window  = Titanium.UI.createWindow({title:module.name});
                var webview = Titanium.UI.createWebView({url:module.url});
                var button  = Titanium.UI.createButton({title:'Close'});
                button.addEventListener('click', function () {
                    window.close();
                });
                window.leftNavButton = button;
                window.add(webview);
                window.open({modal:true});
            });
        table.appendRow(row);
    });

    return table;
};

