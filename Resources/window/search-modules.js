Ti.include('../module/search-modules.js');
Ti.include('../module/table.js');

var window    = Ti.UI.currentWindow;
var searchBar = Titanium.UI.createSearchBar({
    showCancel:true,
    height:43,
    top:0
});

searchBar.addEventListener('cancel', function ()  {
    searchBar.blur();
});

var table = (new Table([], searchBar)).build();
window.add(table);

searchBar.addEventListener('return', function (e) {
    searchBar.blur();
    var word = e.value;
    (new ModuleSearcher()).search(word, function (modules) {
        if (modules.length > 0) {
            var table   = (new Table(modules, searchBar)).build();
            window.add(table);
        }
        else {
            alert('no result for ' + word);
        }
    });
});
