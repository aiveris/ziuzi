"use strict";
const addTodoA1 = document.querySelector(".add-todo-a1");
const addTodoFormA1 = document.querySelector(".add-todo-a1 .form");
const tableTodosA1 = document.querySelector(".table-a1");
const btnAdd = document.querySelector(".btn-add");
const plansA1 = document.querySelector(".buttonA1");
const ziuziLogo = document.querySelector("#ziuzi-logo");
let id;
let countA1 = 0;

const getButtonById = (buttonId) => document.getElementById(buttonId);

const setButtonDisabledById = (buttonId, disabled) => {
  const btn = getButtonById(buttonId);
  if (btn) {
    btn.disabled = disabled;
  }
};

const setButtonDisabledByTodo = (todo, disabled) => {
  if (!todo) {
    return;
  }

  const match = todo.match(/(\d+)\s*$/);
  if (!match) {
    return;
  }

  setButtonDisabledById(match[1], disabled);
};

const addPlayer = (todo, buttonId) => {
  db.collection("a1").add({
    todo: todo,
  });
  setButtonDisabledById(buttonId, true);
};

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
  tableTodosA1.innerHTML = "";
  countA1 = 0;

  const playerButtons = document.querySelectorAll(".players button");
  playerButtons.forEach((button) => {
    button.disabled = false;
  });

  const sortedDocs = snapshot.docs.sort((a, b) =>
    a.data().todo.localeCompare(b.data().todo, "lt", { sensitivity: "base" })
  );

  sortedDocs.forEach((doc) => {
    renderTodoA1(doc);
    countA1++;
    setButtonDisabledByTodo(doc.data().todo, true);
  });

  document.getElementById("countA1").innerHTML = countA1;
});
addTodoFormA1.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("a1").add({
    todo: addTodoFormA1.todo.value,
  });
  addTodoFormA1.todo.value = "";
});

const deleteAllA1 = async () => {
  const result = confirm(
    "Ar tikrai norite ištrinti visus įrašus?"
  );
  if (!result) {
    return;
  }

  const snapshot = await db.collection("a1").get();
  if (snapshot.empty) {
    return;
  }

  let batch = db.batch();
  let batchCount = 0;

  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
    batchCount++;

    if (batchCount === 500) {
      batch.commit();
      batch = db.batch();
      batchCount = 0;
    }
  });

  if (batchCount > 0) {
    await batch.commit();
  }
};

if (ziuziLogo) {
  ziuziLogo.addEventListener("click", () => {
    deleteAllA1();
  });
}

function add_player_0() {
  addPlayer("Daivaras Lebednykas 0", "0");
}
function add_player_2() {
  addPlayer("Gediminas Petrauskas 2", "2");
}
function add_player_3() {
  addPlayer("Andrius Volkovas 3", "3");
}
function add_player_4() {
  addPlayer("Šarūnas Butrimas 4", "4");
}
function add_player_5() {
  addPlayer("Edvinas Ribokas 5", "5");
}
function add_player_7() {
  addPlayer("Evaldas Žemaitis 7", "7");
}
function add_player_8() {
  addPlayer("Vytautas Mereckis 8", "8");
}
function add_player_9() {
  addPlayer("Evaldas Stankevičius 9", "9");
}
function add_player_10() {
  addPlayer("Donatas Bilius 10", "10");
}
function add_player_11() {
  addPlayer("Daivaras Lebednykas 11", "11");
}
function add_player_12() {
  addPlayer("Paulius Vitkauskas 12", "12");
}
function add_player_13() {
  addPlayer("Lukas Revinskas 13", "13");
}
function add_player_14() {
  addPlayer("Augustinas Stoškus 14", "14");
}
function add_player_15() {
  addPlayer("Mantas Kadzevičius 15", "15");
}
function add_player_19() {
  addPlayer("Vakaris Stoškus 19", "19");
}
function add_player_23() {
  addPlayer("Laurynas Čižius 23", "23");
}
function add_player_24() {
  addPlayer("Artūras Šliažas 24", "24");
}
function add_player_27() {
  addPlayer("Mantas Kadzevičius 27", "27");
}
function add_player_29() {
  addPlayer("Tomas Dzeventkauskas 29", "29");
}
function add_player_30() {
  addPlayer("Mindaugas Beleka 30", "30");
}
function add_player_33() {
  addPlayer("Rimantas Sagatas 33", "33");
}
function add_player_35() {
  addPlayer("Tomas Purlys 35", "35");
}
function add_player_42() {
  addPlayer("Donatas Bilius 42", "42");
}
function add_player_55() {
  addPlayer("Donatas Bilius 55", "55");
}
function add_player_69() {
  addPlayer("Raimondas Maslauskas 69", "69");
}
function add_player_77() {
  addPlayer("Rokas Židžiūnas 77", "77");
}
function add_player_82() {
  addPlayer("Dainius Stoškus 82", "82");
}
function add_player_91() {
  addPlayer("Jonas Savickas 91", "91");
}
function add_player_92() {
  addPlayer("Augustinas Stoškus 92", "92");
}
function add_player_93() {
  addPlayer("Jonas Savickas 93", "93");
}
function add_player_98() {
  addPlayer("Karolis Bliodnieks 98", "98");
}
function add_player_99() {
  addPlayer("Tomas Žiburkus 99", "99");
}

