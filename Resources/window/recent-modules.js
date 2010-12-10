Ti.include('../module/recent-modules.js');
Ti.include('../module/table.js');

var window = Ti.UI.currentWindow;
window.addEventListener('open', function(e) {
    (new RecentModules()).load(function (modules) {
        var table   = (new Table(modules)).build();
        window.add(table);
    });
});
