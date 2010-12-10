var window   = Ti.UI.currentWindow;
var tabGroup = Ti.UI.createTabGroup();

var recentModulesWindow = Ti.UI.createWindow({
    title:'Recent Modules',
    url: "../window/recent-modules.js",
    backgroundColor: '#fff'
});

var recentModulesTab = Ti.UI.createTab({
    title: 'Recent Modules',
    window: recentModulesWindow
});
tabGroup.addTab(recentModulesTab);

var searchModulesWindow = Ti.UI.createWindow({
    title:'Search Modules',
    url : "../window/search-modules.js",
    backgroundColor:'#fff'
});

var searchModulesTab = Ti.UI.createTab({
    title:'Search Modules',
    window:searchModulesWindow
});
tabGroup.addTab(searchModulesTab);

tabGroup.open();
tabGroup.addEventListener('open', function(e) {
    tabGroup.setActiveTab(0);
});
