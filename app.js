// importazione di express

const express = require("express");
const app = express();
const port = 3000;

// leggere la cartella public

app.use(express.static('public'));


// import di express e inserimento della lista di oggetti

app.get("/", (req, res) => {
res.send(`Server del mio blog`);})

app.get("/bacheca", (req, res) => { // potrei mettere anche /api per far capire all'utente dove si trova l'oggetto


   const bacheca = [{
    title: "Cracker alla barbabietola",
    content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
              Cracker di farro
              Cracker di lupini
              Cracker allo zafferano
              Cracker ai semi`,
    image: "imgs/cracker_barbabietola.jpeg",
    tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"]},

    {
        
    title: "Ciambellone",
    content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
              Cracker di farro
              Cracker di lupini
              Cracker allo zafferano
              Cracker ai semi`,
    image: "imgs/ciambellone.jpeg",
    tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"]},

    {
    title: "Pane Fritto",
    content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
              Cracker di farro
              Cracker di lupini
              Cracker allo zafferano
              Cracker ai semi`,
    image: "imgs/pane_fritto_dolce.jpeg",
    tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"]
    },

    {
    title: "Pasta barbabietola",
    content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
              Cracker di farro
              Cracker di lupini
              Cracker allo zafferano
              Cracker ai semi`,
    image: "imgs/pasta_barbabietola.jpeg",
    tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"]
    },

    {
    title: "Torta paesana",
    content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
              Cracker di farro
              Cracker di lupini
              Cracker allo zafferano
              Cracker ai semi`,
    image: "imgs/torta_paesana.jpeg",
    tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"]
    }

]

  res.json(bacheca)

    })


    //Attivazione del server
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
