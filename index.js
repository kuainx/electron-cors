const {app, BrowserWindow} = require("electron");


function createWindow() {
	const win = new BrowserWindow({
		width: 1000,
		height: 1000,
		webPreferences: {},
	});

	win.loadURL("https://www.baidu.com");
	const contents = win.webContents;
	contents.executeJavaScript("alert(1)");
}

app.whenReady()
	.then(() => {
			createWindow();
			app.on("activate", () => {
				if (BrowserWindow.getAllWindows().length === 0) {
					createWindow();
				}
			});
		},
	);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
