document.getElementById('hitungBtn').addEventListener('click', function() {
    // Deklarasi const untuk bobot dan batas kelulusan
    const bobotTugas = 0.3;
    const bobotUTS = 0.3;
    const bobotUAS = 0.4;
    const batasLulus = 70;

    // Mengambil nilai dari input dan  mengonversi sebuah string menjadi angka desimal bilangan pecahan
    let nilaiTugas = parseFloat(document.getElementById('tugas').value);
    let nilaiUTS = parseFloat(document.getElementById('uts').value);
    let nilaiUAS = parseFloat(document.getElementById('uas').value);

    // Validasi input agar berada di antara 0 dan 100
    if (isNaN(nilaiTugas) || isNaN(nilaiUTS) || isNaN(nilaiUAS) || 
        nilaiTugas < 0 || nilaiTugas > 100 || 
        nilaiUTS < 0 || nilaiUTS > 100 || 
        nilaiUAS < 0 || nilaiUAS > 100) {
        alert('Silakan masukkan nilai yang benar (0-100)');
        return;
    }

    // Menghitung rata-rata dari nilai yang telah diinputkan
    let rataRata = (nilaiTugas * bobotTugas) + (nilaiUTS * bobotUTS) + (nilaiUAS * bobotUAS);

    // Menentukan huruf mutu berdasarkan rata-rata
    let hurufMutu;
    if (rataRata >= 90) {
        hurufMutu = 'A';
    } else if (rataRata >= 80) {
        hurufMutu = 'B';
    } else if (rataRata >= 70) {
        hurufMutu = 'C';
    } else if (rataRata >= 60) {
        hurufMutu = 'D';
    } else {
        hurufMutu = 'E';
    }

    // Menentukan status lulus/gagal
    let keterangan;
    let kelasHasil;

    if (rataRata >= batasLulus) {
        keterangan = 'ANDA LULUS !!';
        kelasHasil = 'lulus';
    } else {
        keterangan = 'ANDA GAGAL :((';
        kelasHasil = 'gagal';
    }

    // Menampilkan hasil ke dalam div hasil
    let hasilDiv = document.getElementById('hasil');
    hasilDiv.className = `hasil ${kelasHasil}`;
    hasilDiv.innerHTML = `
        <h2>Keterangan Nilai</h2>
        <table class="hasil-tabel">
            <tr>
                <td>Nilai Tugas</td>
                <td>${nilaiTugas.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Nilai UTS</td>
                <td>${nilaiUTS.toFixed(2)}</td>
            </tr>
            <tr>
                <td>Nilai UAS</td>
                <td>${nilaiUAS.toFixed(2)}</td>
            </tr>
            <tr>
                <td><strong>Nilai Rata-Rata</strong></td>
                <td><strong>${rataRata.toFixed(2)}</strong></td>
            </tr>
            <tr>
                <td>Huruf Mutu</td>
                <td>${hurufMutu}</td>
            </tr>
        </table>
        <h2>Status</h2>
        <h3 class="${kelasHasil}">${keterangan}</h3>
    `;
});