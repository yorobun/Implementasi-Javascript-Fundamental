const tugas = Number(document.getElementById("tugas").value);
const uts = Number(document.getElementById("uts").value);
const uas = Number(document.getElementById("uas").value);

function hitungNilaiAkhir(tugas, uts, uas) {
  return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

function tentukanGrade(nilaiAkhir) {
    if (nilaiAkhir >= 85) return "A";
    else if (nilaiAkhir >= 75) return "B";
    else if (nilaiAkhir >= 65) return "C";
    else if (nilaiAkhir >= 55) return "D";
    return "E";
}

// Validation Loop
const daftarNilai = [tugas, uts, uas];
let semuaValid = true;
for (let i = 0; i < daftarNilai.length; i++) {
    if (!validasiNilai(daftarNilai[i])) {
    semuaValid = false;
    }
}