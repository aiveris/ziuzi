"use strict";
const addTodoA1 = document.querySelector(".add-todo-a1");
const addTodoFormA1 = document.querySelector(".add-todo-a1 .form");
const tableTodosA1 = document.querySelector(".table-a1");
const btnAdd = document.querySelector(".btn-add");
const plansA1 = document.querySelector(".buttonA1");
let id;
let countA1 = 0;

// Create element and render to-do a1 ----------------------------------
const renderTodoA1 = (doc) => {
  const tr = `
    <tr data-id='${doc.id}'>
      <td>${doc.data().todo}</td>
      <th>
      <button class="btn btn-delete">✘</button>
      </th>
    </tr>
  `;

  tableTodosA1.insertAdjacentHTML("beforeend", tr);

  // Click delete to-do
  const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
  btnDelete.addEventListener("click", () => {
    var result = confirm("Want to delete?");
    if (result) {
      db.collection("a1").doc(`${doc.id}`).delete();
    }
  });
};
// // Real time listener.
db.collection("a1").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      renderTodoA1(change.doc);
      countA1++;
      document.getElementById("countA1").innerHTML = countA1;
    }
    if (change.type === "removed") {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableTodosA1.removeChild(tbody);
      countA1--;
      document.getElementById("countA1").innerHTML = countA1;
    }
  });
});
addTodoFormA1.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("a1").add({
    todo: addTodoFormA1.todo.value,
  });
  addTodoFormA1.todo.value = "";
});

function add_player_0() {
  db.collection("a1").add({
    todo: "Daivaras Lebednykas 0",
  });
}
function add_player_2() {
  db.collection("a1").add({
    todo: "Gediminas Petrauskas 2",
  });
}
function add_player_3() {
  db.collection("a1").add({
    todo: "Simonas Šidlauskas 3",
  });
}
function add_player_4() {
  db.collection("a1").add({
    todo: "Šarūnas Butrimas 4",
  });
}
function add_player_5() {
  db.collection("a1").add({
    todo: "Edvinas Ribokas 5",
  });
}
function add_player_7() {
  db.collection("a1").add({
    todo: "Evaldas Žemaitis 7",
  });
}
function add_player_8() {
  db.collection("a1").add({
    todo: "Laimonas Šegžda 8",
  });
}
function add_player_9() {
  db.collection("a1").add({
    todo: "Arminas Zakarys 9",
  });
}
function add_player_10() {
  db.collection("a1").add({
    todo: "Edvinas Ščerbukas 10",
  });
}
function add_player_11() {
  db.collection("a1").add({
    todo: "Karolis Bliodnieks 11",
  });
}
function add_player_12() {
  db.collection("a1").add({
    todo: "Paulius Vitkauskas 12",
  });
}
function add_player_13() {
  db.collection("a1").add({
    todo: "Lukas Revinskas 13",
  });
}
function add_player_14() {
  db.collection("a1").add({
    todo: "Augustinas Stoškus 14",
  });
}
function add_player_15() {
  db.collection("a1").add({
    todo: "Artūras Simonaitis 15",
  });
}
function add_player_19() {
  db.collection("a1").add({
    todo: "Vakaris Stoškus 19",
  });
}
function add_player_23() {
  db.collection("a1").add({
    todo: "Justas Sobolevskis 23",
  });
}
function add_player_24() {
  db.collection("a1").add({
    todo: "Artūras Šliažas 24",
  });
}
function add_player_27() {
  db.collection("a1").add({
    todo: "Mantas Kadzevičius 27",
  });
}
function add_player_30() {
  db.collection("a1").add({
    todo: "Mindaugas Beleka 30",
  });
}
function add_player_33() {
  db.collection("a1").add({
    todo: "Rimantas Sagatas 33",
  });
}
function add_player_42() {
  db.collection("a1").add({
    todo: "Donatas Bilius 42",
  });
}
function add_player_55() {
  db.collection("a1").add({
    todo: "Donatas Bilius 55",
  });
}
function add_player_69() {
  db.collection("a1").add({
    todo: "Raimondas Maslauskas 69",
  });
}
function add_player_77() {
  db.collection("a1").add({
    todo: "Donatas Bilius 77",
  });
}
function add_player_82() {
  db.collection("a1").add({
    todo: "Dainius Stoškus 82",
  });
}
function add_player_91() {
  db.collection("a1").add({
    todo: "Jonas Savickas 91",
  });
}
function add_player_92() {
  db.collection("a1").add({
    todo: "Augustinas Stoškus 92",
  });
}
function add_player_99() {
  db.collection("a1").add({
    todo: "Tomas Žiburkus 99",
  });
}

