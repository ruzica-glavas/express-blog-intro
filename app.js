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
    content: `Il ciambellone è un dolce soffice e genuino, perfetto per la colazione o la merenda, preparato con: 
                farina 
                uova
                zucchero 
                latte
                burro (o olio)
                lievito
                
                spesso arricchito con aromi: come vaniglia, limone o cacao.`,
    image: "imgs/ciambellone.jpeg",
    tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"]},

    {
    title: "Pane Fritto",
    content: `Il pane fritto è una preparazione semplice e sfiziosa, perfetta per recuperare il pane raffermo, croccante fuori e morbido dentro, ideale come antipasto o spuntino.

            Ingredienti:

            Pane raffermo a fette
            Uova
            Latte
            Sale (o zucchero per la versione dolce)
            Olio per friggere`,
    image: "imgs/pane_fritto_dolce.jpeg",
    tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"]
    },

    {
    title: "Pasta barbabietola",
    content: `La pasta con barbabietola è un primo piatto colorato e dal sapore delicatamente dolce, perfetto per un pasto sano e originale.

            Ingredienti:

            Pasta (preferibilmente corta o spaghetti)
            Barbabietola cotta
            Aglio
            Olio extravergine d'oliva
            Formaggio cremoso (opzionale, es. ricotta o feta)
            Sale e pepe
            Noci o semi (opzionali, per guarnire)`,
    image: "imgs/pasta_barbabietola.jpeg",
    tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"]
    },

    {
    title: "Torta paesana",
    content: `La torta paesana è un dolce tipico della tradizione lombarda, ricco e sostanzioso, preparato con pane raffermo, latte, cacao e frutta secca, perfetto per non sprecare gli avanzi e gustare un sapore autentico.

            Ingredienti:

            Pane raffermo
            Latte
            Zucchero
            Cacao amaro in polvere
            Uova
            Uvetta
            Pinoli
            Amaretti sbriciolati
            Burro
            Scorza di limone (opzionale)`,
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
