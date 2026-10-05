// 03_array_object/script.js
const mahasiswa = [
    { nama: "Fadila", prodi: "SI", nilai: 88 },
    { nama: "Bima", prodi: "SI", nilai: 76 },
    { nama: "Citra", prodi: "SI", nilai: 91 },
    { nama: "Dedi", prodi: "SI", nilai: 64 }
];

function hitungRataRata(dataMahasiswa) {
    let total = 0;
    for (let i = 0; i < dataMahasiswa.length; i++) 
    {
    total += dataMahasiswa[i].nilai;
    }
    return total / dataMahasiswa.length;
}

const rataRata = hitungRataRata(mahasiswa);
const jumlahLulus = mahasiswa.filter((item) => item.nilai >= 65).length;