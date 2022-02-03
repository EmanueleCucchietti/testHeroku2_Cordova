# testHeroku2_Cordova

Master Branch
Server NodeJs Based

Npm Modules Installed:
- `express` -> "Fast, unopinionated, minimalist web framework for node." - https://www.npmjs.com/package/express
- `http` -> "Create server with http protocol"

The server is hosted on heroku at "https://emacuch-test2.herokuapp.com/"
Working both for http/https thanks to heroku

## Open Api


Testing Get
Return a testing object with 3 paramethers (name,surname,age) with random name and age
```
"https://emacuch-test1.herokuapp.com/api/testGet"
```
```
app.get('/api/testGet', (req, res, next) => {
    class jsonT{
        Nome;
        Cognome;
        Eta;

        constructor(nome,cognome,eta){
            this.Nome = nome;
            this.Cognome = cognome;
            this.Eta = eta
        }
    }
    let jsonTest = new jsonT("nome"+generaNumero(0,10),"test",generaNumero(10,90))
    res.json(jsonTest);
});
```


---------------------------------------------------

# Emanule Cucchietti