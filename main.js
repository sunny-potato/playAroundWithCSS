// const linkTag = document.createElement("a");
// linkTag.setAttribute("href", "http://1.smile/index.html");
// linkTag.href = "/1.smile/index.html";
// linkTag.textContent = "smile";
// console.log(linkTag);

let table;
function creatTable() {
  table = "<table>";
  for (let i = 0; i < 10; i++) {
    table += "<tr>";
    for (let j = 0; j < 10; j++) {
      const fileName = getCSSfile(i, j);
      console.log(fileName, i, j);
      table += "<td>";
      if (fileName === undefined) {
        table += "";
      } else {
        table += `<a target="_blank" href="/${fileName}/index.html">${fileName}</a>`;
      }
      table += "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  return table;
}

const doneTable = creatTable();
const container = document.getElementById("container");
container.innerHTML = `${doneTable}`;

// ["smile", "computer", "envelope", "reading", "celebration"]
function getCSSfile(i, j) {
  // i = i + 1;
  // j = j + 1;
  const CSSlist = [
    ["1.smile", "2.computer", "3.envelope", "4.reading", "5.celebration"],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  return CSSlist[i][j];
}
