import { UnitList, Requested } from "./adatok.js";

let db = 0;
let kosar = `Requested units: ` + db;

$(function () {
  const ARTICLE = $("article");
  const FOCIM = $("#focim");
  const FOOTER = $("footer");
  const NAV = $("nav");
  FOCIM.html(
    `<div class="bg-secondary p-3"><h1 class="text-danger">Requested units<h1></div>`
  );
  ARTICLE.html(divek);
  const MODELID = $("#myModal .modal-content");
  const INFOELEM = $(".info");
  const KOSARELEM = $(".kosar");
  const KOSAR = $(".kosarTart");
  const KEZD = $(".kezdTart");
  const ADMIN = $(".adminTart");
  FOOTER.html(kosar);
  navfeltoltes();

  $(".link1").on("click", KEZD, function () {
    FOCIM.html(
      `<div class="bg-secondary p-3"><h1 class="text-danger">Requested units<h1></div>`
    );
    ARTICLE.html(divek);
  });

  $(".link2").on("click", KOSAR, function () {
    let kosar1 = "";
    for (let i = 0; i < Requested.length; i++) {
      kosar1 += `<div class="card col-lg-3 col-md-4 col-sm-6">`;
      kosar1 += `<h2 class="card-header">${UnitList[Requested[i]].Unit}</h2>`;
      kosar1 += `<img src="${
        UnitList[Requested[i]].kep
      }" class="rounded" alt="units"><br>`;
      kosar1 += `<p class="card-body "> amount: ${
        UnitList[Requested[i]].darab
      }</p><br>`;
      kosar1 += `<div class="card-footer btn-group">
          </div>`;
      kosar1 += `</div>`;
    }
    $(".linkek3").on("click", ADMIN, function () {
      FOCIM.html(`<h1>Admin page<h1>`);
      ARTICLE.html(adminfelulet);
      FOOTER.html(null);
    });
    FOCIM.html(
      `<div class="bg-secondary p-3"><h1 class="text-danger">Requested units<h1></div>`
    );
    ARTICLE.html(kosar1);
    FOOTER.html(kosar);
  });

  function unitamount() {
    let ertek = 0;
    for (let i = 0; i < Requested.length; i++) {
      ertek += UnitList[Requested[i]].db;
    }
    osszam = "Total of units: " + ertek;
    return osszam;
  }

  function navfeltoltes() {
    let nav = `<div class="container-fluid">
    <ul class="linkek navbar-nav">
      <li  class="link1 nav-item">
        <a class="kezdTart nav-link btn btn-danger" href="#" id="kezdTart">Units</a>
      </li>
      <li class="link2 nav-item">
        <a class="kosarTart nav-link btn btn-danger href="#" id="kosarTart">Request</a>
      </li>
      <li class="link3 nav-item">
      <a class="kosarTart nav-link btn btn-danger href="#" id="adminTart">Admin</a>
    </li>
    </ul>
  </div>`;
    NAV.html(nav);
  }

  INFOELEM.on("click", function () {
    let id = event.target.id;
    console.log(id);
    let modelbelselye = `
    <div class="modal-header">
      <h4 class="modal-title">${UnitList[id].Unit}</h4>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>

    <div class="modal-body">
    <div class="card">
    
    <img src="${UnitList[id].kep}" class="cardImg" alt="units"><br>
    <p class="card-body"> description: ${UnitList[id].description}</p><br>
    <div class="card-footer btn-group">
    </div>
    

    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
    </div>`;
    MODELID.html(modelbelselye);
  });

  KOSARELEM.on("click", function () {
    db++;
    kosar = `Units: ` + db;
    FOOTER.html(kosar);

    let id = event.target.id;
    Requested.push(id);

    console.log(Requested);
  });
});

function divek() {
  let txt = "";
  for (let i = 0; i < UnitList.length; i++) {
    txt += `<div class="bg-dark p-3 card col-lg-4 col-md-6 col-sm-8">`;
    txt += `<h2 class="card-header text-danger">${UnitList[i].Unit}</h2>`;
    txt += `<img src="${UnitList[i].kep}" class="cardImg" alt="units"><br>`;
    txt += `<p class="card-body text-danger"> amount: ${UnitList[i].darab}</p><br>`;
    txt += `<div class="card-footer btn-group">
          <button class="info btn btn-dark text-danger" data-bs-toggle="modal" data-bs-target="#myModal" id="${i}">Info</button>
          <button class="kosar btn btn-dark text-danger" id="${i}">Order</button>
          </div>`;
    txt += `</div>`;
  }

  txt += `<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
    <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>`;
  return txt;
}
// az egész oldalt tönkre teszi valami miért a beteszem a kód ba.
/* function adminfelulet() {
    let txt = `<table class="table table-striped">`;
    for (let i = 0; i < TERMEKLISTA.length; i++) {
      txt += `<tr>
                <td>${TERMEKLISTA[i].termek}</td><td>${TERMEKLISTA[i].ar}</td><td>${TERMEKLISTA[i].darab}</td><td><img src="${TERMEKLISTA[i].kep}" class="adminkep"></td><td>${TERMEKLISTA[i].leiras}</td><td><button class="jobboldal" id="${i}" onclick="deleteterlist(event)">X</button></td>
                </tr>`;
    }
    txt += `</table>`;
  
    txt += `<div class="container mt-3">
      <h2>Feltöltés</h2>
      <form action="/action_page.php">
        <div class="mb-3 mt-3">
          <label for="termek">Termék neve:</label>
          <input type="text" class="form-control" id="termek" placeholder="termék" name="termek">
        </div>
        <div class="mb-3 mt-3">
          <label for="ar">ár:</label>
          <input type="text" class="form-control" id="ar" placeholder="ár" name="ar">
        </div>
        <div class="mb-3 mt-3">
          <label for="darab">darab:</label>
          <input type="text" class="form-control" id="darab" placeholder="darab" name="darab">
        </div>
        <div class="mb-3">
          <label for="kep">kép:</label>
          <input type="text" class="form-control" id="kep" placeholder="kép" name="kep">
        </div>
        <div class="mb-3">
          <label for="leiras">leírás:</label>
          <input type="text" class="form-control" id="leiras" placeholder="leirás" name="leiras">
        </div>
        <div class="form-check mb-3">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>`;
    
  } */
