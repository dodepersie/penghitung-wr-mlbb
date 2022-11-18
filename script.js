// Variables
const totalMatchSkrg = document.querySelector("#totalMatchSkrg");
const wrSkrg = document.querySelector("#wrSkrg");
const wrTrgt = document.querySelector("#wrTrgt");
const hitung = document.querySelector("#hitung");
const alert = document.querySelector("#alert");
const hasil = document.querySelector("#hasil");
const container = document.querySelector(".container-sm");
const loaders = document.getElementById("loaders");

alert.style.display = "none";
hasil.style.display = "none";

// Functions
function res() {
    loaders.style.display = "block";
    container.style.filter = "blur(8px)";
    setTimeout(() => {
        if(totalMatchSkrg.value == "" ||  wrSkrg.value =="" || wrTrgt.value == "") {
            alert.style.display = "block";
            hasil.style.display = "none";
            loaders.style.display = "none";
            container.style.filter = "blur(0px)";
            alert.innerHTML = "Tidak boleh kosong!";
        } else if(wrSkrg.value > 100 || wrTrgt.value > 100) {
            alert.style.display = "block";
            hasil.style.display = "none";
            loaders.style.display = "none";
            container.style.filter = "blur(0px)";
            alert.innerHTML = "Tidak manuk akal";
        } else if(wrSkrg.value > wrTrgt.value) {
            alert.style.display = "block";
            hasil.style.display = "none";
            loaders.style.display = "none";
            container.style.filter = "blur(0px)";
            alert.innerHTML = "Manuk akal, tapi nurunin WR buat apa? wkwkwk";
        } else if(wrSkrg.value == wrTrgt.value) {
            alert.style.display = "block";
            hasil.style.display = "none";
            loaders.style.display = "none";
            container.style.filter = "blur(0px)";
            alert.innerHTML = "WR Sekarang dan WR Target <strong>tidak boleh sama!</strong>";
        } else {
            alert.style.display = "none";
            hasil.style.display = "block";
            loaders.style.display = "none";
            container.style.filter = "blur(0px)";
            const resultNum = rumus(totalMatchSkrg.value, wrSkrg.value, wrTrgt.value);
            const text = `Kamu memerlukan sekitar <strong>${resultNum}</strong> win tanpa lose untuk mendapatkan win rate <strong>${wrTrgt.value}%</strong>`;
            hasil.innerHTML = text;
        }
        // Set input to blank
        totalMatchSkrg.value = "";
        wrSkrg.value = "";
        wrTrgt.value = "";
    }, [1250])
}

function rumus(totalMatchSkrg, wrSkrg, wrTrgt) {
    // Code from hitungwr.com
    let totalMenang = totalMatchSkrg * (wrSkrg / 100);
    let totalKalah = totalMatchSkrg - totalMenang;
    let sisaWr = 100 - wrTrgt;
    let hasilWR = 100 / sisaWr;
    let seratusPersen = totalKalah * hasilWR;
    let final = seratusPersen - totalMatchSkrg;
    return Math.round(final);
}

// Main
window.addEventListener("load", init);

function init() {
    load();
    eventListener();
}

function load() {}

function eventListener() {
    hitung.addEventListener("click", res);
}