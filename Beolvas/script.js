function Beolvas() {
    let file = document.getElementById("proba").files[0]

    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (kispista) {
            console.log(kispista.target.result);
        }
        reader.onerror = function (evt) {
            console.log("error reading file");
        }
    }
}