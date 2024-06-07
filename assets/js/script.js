/* creo la costante con l'url da fetchare */
const url = "https://jsonplaceholder.typicode.com/users";
/* funzione per ottenere i dati degli utenti dall'url */
async function getData() {
  /* attendo la risposta dal server */
  const response = await fetch(url);
    // console.log("GETDATA => response\n",response);
  /* converto la risposta in un oggetto json */
  const data = await response.json();
    // console.log("GETDATA => data\n",data);
  return data;
}

/* al caricamento della pagina... */
document.addEventListener("DOMContentLoaded", () => {
  /* chiamo la funzione per ottenere i dati degli utenti */
  getData();
});
