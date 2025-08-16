// if
var lampu = true;
if (lampu) {
  console.log("lampu menyala");
  // else
} else {
  console.log("lampu padam");
}

// else if
var warnaLampu = "biru";
if (warnaLampu == "merah") {
  console.log("lampu merah");
} else if (warnaLampu == "kuning") {
  console.log("lampu kuning");
} else if (warnaLampu == "hijau") {
  console.log("lampu hijau");
} else {
  console.log("lampu padam");
}

// switch
switch (warnaLampu) {
  case "merah":
    console.log("lampu merah");
    break;
  case "kuning":
    console.log("lampu kuning");
    break;
  case "hijau":
    console.log("lampu hijau");
    break;

  default:
    console.log("lampu padam");
    break;
}

// function
function mobil(mobil1) {
  mobil1 = "kijang";
  document.getElementById("mobil").innerHTML =
    "ini pemanggilan function menggunakan nama mobil " + mobil1;
}
// pemanggilan nama function di atas
mobil();

// fungsi ini tidak di eksekusi karena parameter mobil1 tidak terdefinisi, karena tidak di dalam function
// document.getElementById("mobil").innerHTML =
//   "ini pemanggilan function di luar " + mobil1;

//   inisialisasi method
var namaMobil = {
  nama: "Toyota",
  type: "Agya",
  warna: "merah",
  maju: function () {
    return "mulai melaju";
  },
  mundur: function () {
    return "mulai mundur";
  },
};
console.log(
  namaMobil.nama +
    " " +
    namaMobil.warna +
    " " +
    namaMobil.maju() +
    " dan " +
    namaMobil.mundur()
);
