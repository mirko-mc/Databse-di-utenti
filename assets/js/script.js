/* creo la costante con l'url da fetchare */
const URL = "https://jsonplaceholder.typicode.com/users";
/** dichiaro l'array che conterra gli utenti dalla fetch */
let USERS = null;

/* funzione per ottenere i dati degli utenti dall'url */
async function getData() {
  /** se l'oggetto è vaorizzato, non faccio la fetch ma uso oggetto */
  if (USERS !== null) {
    console.log("NON HO fatto la fetch\n");
    return USERS;
  }
  try {
    /* attendo la risposta dal server */
    const RES = await fetch(URL);
    // console.log("GETDATA => response\n",response);
    /* converto la risposta in un oggetto json */
    const DATA = await RES.json();
    // console.log("GETDATA => data\n",data);
    /** mappo il mio oggetto */
    USERS = DATA.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      website: user.website,
      phone: user.phone,
      address: `${user.address.street} ${user.address.suite} - ${user.address.city} - ${user.address.zipcode}`,
      company: user.company.name,
      email: user.email,
    }));
    console.log("HO fatto la fetch\n");
    return DATA;
  } catch (error) {
    console.log("ERRORE NEL RECUPERO DEI DATI DAL SERVER\n", error);
  }
}

/* al caricamento della pagina... */
document.addEventListener("DOMContentLoaded", () => {
  /* chiamo la funzione per ottenere i dati degli utenti */
  getData().then((USERS) => {
    /** dichiaro il main */
    const MAIN = document.querySelector("main");
    /** svuoto il main */
    MAIN.innerHTML = "";
    /** dichiaro un contatore che numererà le righe della tabella */
    let count = 0;
    /** popolo il main con la tabella di tutti gli utenti */
    MAIN.innerHTML += `
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
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
        </tbody>
      </table>
    `;
    USERS.forEach((user) => {
      // console.log("DOMContentLoaded => user\n",user);
      /** dichiaro il tbody della tabella */
      const TBODY = document.querySelector("tbody");
      /** aggiungo le righe alla tabella */
      TBODY.innerHTML += `
        <tr>
          <th scope="row">${++count}</th>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.website}</td>
          <td>${user.phone}</td>
          <td>${user.address}</td>
          <td>${user.company}</td>
          <td>${user.email}</td>
        </tr>
        `;
    });
  });
});

/** funzione per filtrare gli utenti */
function searchUser() {
  /** recupero il tipo di ricerca */
  const SELECT = document.getElementById("searchUserFor").value.toLowerCase();
  //   console.log("SEARCHUSER => select\n", SELECT);
  /** recupero il valore da cercare */
  const INPUT = document.getElementById("searchUser").value.toLowerCase();
  //   console.log("SEARCHUSER => input\n", INPUT);
  /** chiamo la funzione per ottenere i dati degli utenti */
  getData().then((USERS) => {
    // console.log("SEARCHUSER => users\n", users);
    /** filtro gli utenti */
    const FILTEREDUSERS = USERS.filter((user) => {
      /**
       * if = imposto il tipo di ricerca in base alla select
       * return = se l'utente corrisponde ai criteri di ricerca lo aggiungo all'oggetto
       * */
      if (SELECT === "name") {
        return user.name.toLowerCase().includes(INPUT);
      } else if (SELECT === "username") {
        return user.username.toLowerCase().includes(INPUT);
      } else if (SELECT === "email") {
        return user.email.toLowerCase().includes(INPUT);
      }
    });
    // console.log("SEARCHUSER => filteredUsers\n", FILTEREDUSERS);
    /** dichiaro un contatore che numererà le righe della tabella */
    let count = 0;
    /** filtro gli utenti trovati e li aggiungo al main sottoforma tabellare */
    /** dichiaro il tbody della tabella */
    const TBODY = document.querySelector("tbody");
    /** svuoto il tbody della tabella */
    TBODY.innerHTML = "";
    FILTEREDUSERS.forEach((user) => {
      /** aggiungo le righe alla tabella */
      TBODY.innerHTML += `
        <tr>
          <th scope="row">${++count}</th>
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.website}</td>
          <td>${user.phone}</td>
          <td>${user.address}</td>
          <td>${user.company}</td>
          <td>${user.email}</td>
        </tr>
        `;
    });
  });
}
