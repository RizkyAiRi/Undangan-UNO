// --- KONFIGURASI TANGGAL ACARA ---
// Format: "Month Day, Year Time"
// Ganti tanggal di bawah ini sesuai jadwal acaramu
const eventDate = new Date("Januari 25, 2026 08:00:00").getTime();

// --- LOGIKA HITUNG MUNDUR ---
const countdownFunction = setInterval(function () {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Perhitungan waktu
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Menampilkan hasil ke elemen HTML
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;

  // Jika waktu habis
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector(".countdown").innerHTML =
      "<h3>Acara Telah Dimulai!</h3>";
  }
}, 1000);

