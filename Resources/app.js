Titanium.UI.setBackgroundColor('#fff');
var tabGroup = Titanium.UI.createTabGroup();
var window = Titanium.UI.createWindow({
    url : "window/main.js",
    title:'',
    backgroundColor:'#fff',
    tabBarHidden : true
});
var tab = Titanium.UI.createTab({  
    icon:'',
    title:'',
    window:window
});

tabGroup.addTab(tab);  
tabGroup.open();
