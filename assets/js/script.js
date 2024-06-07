/* creo la costante con l'url da fetchare */
const URL = "https://jsonplaceholder.typicode.com/users";

/* funzione per ottenere i dati degli utenti dall'url */
async function getData() {
  /* attendo la risposta dal server */
  const RES = await fetch(URL);
  // console.log("GETDATA => response\n",response);
  /* converto la risposta in un oggetto json */
  const DATA = await RES.json();
  // console.log("GETDATA => data\n",data);
  return DATA;
}

/* al caricamento della pagina... */
document.addEventListener("DOMContentLoaded", () => {
  /* chiamo la funzione per ottenere i dati degli utenti */
  //   getData();
});

/** funzione per filtrare gli utenti */
function searchUser() {
  /** recupero il tipo di ricerca */
  const SELECT = document.getElementById("searchUserFor").value;
  //   console.log("SEARCHUSER => select\n", SELECT);
  /** recupero il valore da cercare */
  const INPUT = document.getElementById("searchUser").value;
  //   console.log("SEARCHUSER => input\n", INPUT);
  /** chiamo la funzione per ottenere i dati degli utenti */
  getData().then((users) => {
    // console.log("SEARCHUSER => users\n", users);
    /** filtro gli utenti */
    const FILTEREDUSERS = users.filter((user) => {
      /**
       * if = imposto il tipo di ricerca in base alla select
       * return = se l'utente corrisponde ai criteri di ricerca lo aggiungo all'oggetto
       * */
      if (SELECT === "name") {
        return user.name.toLowerCase().includes(INPUT.toLowerCase());
      } else if (SELECT === "username") {
        return user.username.toLowerCase().includes(INPUT.toLowerCase());
      } else if (SELECT === "email") {
        return user.email.toLowerCase().includes(INPUT.toLowerCase());
      }
    });
    console.log("SEARCHUSER => filteredUsers\n", FILTEREDUSERS);
    /** dichiaro il main */
    const MAIN = document.querySelector("main");
    /** svuoto il main */
    MAIN.innerHTML = "";
    /** filtro gli utenti trovati e li aggiungo al main sottoforma tabellare */
    FILTEREDUSERS.forEach((user) => {
      MAIN.innerHTML += `
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">USERNAME</th>
      <th scope="col">WEBSITE</th>
      <th scope="col">PHONE</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">COMPANY</th>
      <th scope="col">EMAIL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${user.id}</th>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td>${user.address}</td>
      <td>${user.company}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.website}</td>
    </tr>
  </tbody>
</table>

          <h5 class="text-center">Name: ${user.name}</h5>
          <h6 class="text-center">Username: ${user.username}</h6>
          <p class="text-center">Email: ${user.email}</p>
      `;
    });
  });
}
