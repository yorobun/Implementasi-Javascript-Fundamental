
let namaMahasiswa = "Ayu";
let nilaiUts = 82;
let nilaiUas = 90;

const bobotUts = 0.4;
const bobotUas = 0.6;

let nilaiAkhir = (nilaiUts * bobotUts) + (nilaiUas * bobotUas);

if (nilaiAkhir >= 85) {
    console.log("Predikat: Sangat Baik");
} else if (nilaiAkhir >= 70) {
    console.log("Predikat: Baik");
} else {
    console.log("Predikat: Perlu Remedial");
}

const daftarNilai = [80, 75, 90, 88];
let total = 0;
for (let i = 0; i < daftarNilai.length; i++) {
    total += daftarNilai[i];
}
console.log("Rata-rata:", total / daftarNilai.length);