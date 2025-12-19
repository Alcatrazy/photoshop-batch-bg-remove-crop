#target photoshop
app.displayDialogs = DialogModes.NO;

// =====================
// PERFORMANCE SETTINGS
// =====================
app.preferences.rulerUnits = Units.PIXELS;
app.preferences.typeUnits = TypeUnits.PIXELS;

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
// FILE LIST
// =====================
var files = sourceFolder.getFiles(/\.(jpg|jpeg|png|tif|tiff|psd)$/i);

// =====================
// MAIN LOOP
// =====================
for (var i = 0; i < files.length; i++) {

    var doc = app.open(files[i]);

    // =====================
    // SUSPEND HISTORY (NO PREVIEW)
    // =====================
    doc.suspendHistory("Batch BG Remove", "processDocument()");

    // =====================
    // SAVE
    // =====================
    var name = doc.name.replace(/\.[^\.]+$/, '');
    var saveFile = new File(saveFolder + "/" + Date.now() + "_" + name + ".png");
    savePNG(saveFile);

    // =====================
    // CLOSE & CLEANUP
    // =====================
    doc.close(SaveOptions.DONOTSAVECHANGES);

    // Force memory cleanup every 10 files
    if (i % 10 === 0) {
        app.purge(PurgeTarget.ALLCACHES);
    }
}

// =====================
// MAIN PROCESS FUNCTION
// =====================
function processDocument() {

    var doc = app.activeDocument;

    // Unlock background
    try {
        if (doc.backgroundLayer) {
            doc.backgroundLayer.isBackgroundLayer = false;
        }
    } catch (e) {}

    // Play Action
    try {
        app.doAction("Remove Background", "BG remove");
    } catch (e) {
        return;
    }

    // Crop to 1:1 center
    cropToSquare(doc);
}

// =====================
// SAVE PNG
// =====================
function savePNG(file) {
    var opts = new PNGSaveOptions();
    opts.compression = 9;
    opts.interlaced = false;
    app.activeDocument.saveAs(file, opts, true, Extension.LOWERCASE);
}

// =====================
// CROP 1:1 CENTER
// =====================
function cropToSquare(doc) {
    var w = doc.width.as("px");
    var h = doc.height.as("px");
    var s = Math.min(w, h);

    var l = (w - s) / 2;
    var t = (h - s) / 2;
    var r = l + s;
    var b = t + s;

    doc.crop([l, t, r, b]);
}
