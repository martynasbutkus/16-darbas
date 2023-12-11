const add = document.getElementById("add")
const deleteFirst = document.getElementById("deleteFirst")
const deleteLast = document.getElementById("deleteLast")
const fullName = document.querySelector("input")

let people = []

class Table {
  constructor() {}

  add(){
    add.addEventListener("click", (event) => {
      event.preventDefault()
      const fullName1 = fullName.value.trim().split(" ")
      if (fullName.value === "") {
        alert("Uzpildykite langelius")
        return
      }
      const table = document.getElementById("dataTable")
      const newTr = table.insertRow(table.rows.length)
      let names = newTr.insertCell(0)
      let surname = newTr.insertCell(1)

      names.innerHTML = fullName1[0]
      surname.innerHTML = fullName1.slice(1).join(" ")
      people.push(names.value)
      people.push(surname.value)
      localStorage.setItem("people", people)
      fullName.value = ""

    })
  }
  deleteFirst(){
    deleteFirst.addEventListener("click", () =>{
        const table = document.getElementById('dataTable');
        if (table.rows.length > 1 || table.rows.length < 0 ) {
            table.deleteRow(1);
        }
    })
  }
  deleteLast(){
    const table = document.getElementById('dataTable');
    const lastRow = table.rows.length - 1;
    if (lastRow > 0) {
        table.deleteRow(lastRow);
    }
  }
}
let getPeople = localStorage.getItem("people")
people = getPeople
const newTable = new Table()
newTable.add()
newTable.deleteFirst()
newTable.deleteLast()
