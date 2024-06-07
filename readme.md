DATABASE DI UTENTI

REGOLE:
    - Crea un nuovo repository
    - Tutti gli extra sono facoltativi

ESERCIZI:
    - Usa bootstrap per creare un layout VELOCE, concentrati sulla parte in JS.
    - Stai creando il frontend di un'applicazione che mostra gli utenti provenienti da un API e li filtra. Questi sono i tuoi compiti:
        - Mostra tutti gli utenti in una tabella bootstrap partendo da questo API. Ricorda di usare ASYNC AWAIT!
        https://jsonplaceholder.typicode.com/users
        - Crea un dropdown con tre opzioni :"nome", "username" e "email". Il dropdown sarà la prima parte del tuo filtro.
        - Crea un input di testo. Quando l'utente scrive qualcosa in questo input, la risposta dell'API dovrebbe venir filtrata e renderizzata usando sia il valore dell'input che l'opzione selezionata nel dropdown.
        - Ad esempio se l'utente ha selezionato "email" sul dropdown, quando scrive nell'input, i risultati dovrebbero venir filtrati in base alla email e al contenuto dell'input.
        - Se invece, avesse selezionato "username", i risultati vanno filtrati in base all'username e al contenuto dell'input.
        - Per fare questo, ricordati di questa sintassi alternativa per gli oggetti:
            Sintassi tradizionale: oggetto.proprietà
            Sintassi alternativa: oggetto["proprietà"]
            Questo significa che nelle parentesi quadre potete inserire una variabile o qualsiasi altro valore JS.
            const propDaControllare = "username"
            oggetto[propDaControllare]