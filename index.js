const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arrNames, sortFn) => {
  const sortedName = sortFn(arrNames);
  const formatedName = sortedName.map((name, idx) => {
    return `${idx + 1}. ${name}`;
  });

  return formatedName;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arrOfNames) => {
  arrOfNames.sort((a,b) => a > b ? 1 : -1);
  return arrOfNames;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arrOfNames) => {
  arrOfNames.sort((a,b) => a > b ? -1 : 1);
  return arrOfNames;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
