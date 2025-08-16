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
