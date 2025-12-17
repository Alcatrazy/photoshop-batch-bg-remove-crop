#target photoshop
app.displayDialogs = DialogModes.NO;

// =====================
// FOLDERS
// =====================
var sourceFolder = new Folder("C:\\ps\\src");
if (!sourceFolder.exists) {
    alert("Source folder not found!");
    exit();
}

var saveFolder = new Folder("C:\\ps\\out");
if (!saveFolder.exists) {
    saveFolder.create();
}

// =====================
// GET IMAGE FILES
// =====================
var fileList = sourceFolder.getFiles(/\.(jpg|jpeg|png|tif|tiff|psd|cr2|nef|raw|heic)$/i);

// =====================
// MAIN LOOP
// =====================
for (var i = 0; i < fileList.length; i++) {

    app.open(fileList[i]);
    var doc = app.activeDocument;

    // =====================
    // UNLOCK BACKGROUND
    // =====================
    try {
        if (doc.backgroundLayer) {
            doc.backgroundLayer.isBackgroundLayer = false;
        }
    } catch (e) {}

    // =====================
    // PLAY ACTION
    // Action Set: BG remove
    // Action: Remove Background
    // =====================
    try {
        app.doAction("Remove Background", "BG remove");
    } catch (e) {
        alert("Action 'Remove Background' not found in set 'BG remove'");
        doc.close(SaveOptions.DONOTSAVECHANGES);
        continue;
    }

    // =====================
    // CROP TO 1:1 (CENTER)
    // =====================
    cropToSquare(doc);

    // =====================
    // SAVE AS PNG
    // =====================
    var baseName = doc.name.replace(/\.[^\.]+$/, '');
    var saveFile = new File(saveFolder + "/" + Date.now() + "_" + baseName + ".png");
    savePNG(saveFile);

    // =====================
    // CLOSE WITHOUT SAVING
    // =====================
    doc.close(SaveOptions.DONOTSAVECHANGES);
}

// =====================
// FUNCTIONS
// =====================

// SAVE PNG WITH TRANSPARENCY
function savePNG(saveFile) {
    var pngOptions = new PNGSaveOptions();
    pngOptions.compression = 9;
    pngOptions.interlaced = false;
    app.activeDocument.saveAs(saveFile, pngOptions, true, Extension.LOWERCASE);
}

// CENTER CROP 1:1
function cropToSquare(doc) {
    var w = doc.width.as("px");
    var h = doc.height.as("px");
    var size = Math.min(w, h);

    var left = (w - size) / 2;
    var top = (h - size) / 2;
    var right = left + size;
    var bottom = top + size;

    doc.crop([left, top, right, bottom]);
}
