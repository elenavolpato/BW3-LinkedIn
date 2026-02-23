eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMTE1ODBiYzFkZTAwMTU3N2I3OWQiLCJpYXQiOjE3NzE4MzU3MzYsImV4cCI6MTc3MzA0NTMzNn0.sqNA4zaClXn_qt6yLcLVvYsT1sOeGx_2BmLmdLBSF40

- GET https://striveschool-api.herokuapp.com/api/profile/ // Ritorna la lista dei profili utente
- GET https://striveschool-api.herokuapp.com/api/profile/me // Ritorna il tuo profilo
- GET https://striveschool-api.herokuapp.com/api/profile/:userId // Ritorna un profilo specifico
- PUT https://striveschool-api.herokuapp.com/api/profile/ // Aggiorna il profilo utente

PROFILI:- GET https://striveschool-api.herokuapp.com/api/profile/ // Ritorna la lista dei profili utente- GET https://striveschool-api.herokuapp.com/api/profile/me // Ritorna il tuo profilo- GET https://striveschool-api.herokuapp.com/api/profile/:userId // Ritorna un profilo specifico- PUT https://striveschool-api.herokuapp.com/api/profile/ // Aggiorna il profilo utenteModello del PROFILO:{  "name": "Mario",  "surname": "Rossi",  "email": "mario@rossi.it",  "username": "mario88",  "bio": "Freelance developer",  "title": "Full Stack Web Developer",  "area": "Milan",  "image": ..., // SERVER GENERATED, modificabile  "createdAt": "2019-09-20T08:53:07.094Z", // SERVER GENERATED  "updatedAt": "2019-09-20T09:00:46.977Z", // SERVER GENERATED  "\_\_v": 0, // SERVER GENERATED  "\_id": "5d84937322b7b54d848eb41b", // SERVER GENERATED}

Suggerimenti:

Dividi la pagina in componenti riutilizzabiliDefinisci come team chi farà cosaQuando fai il fetch dell'utente attuale, salva l'informazione nel Redux Store cosicché ogni componente possa accedere all'informazione successivamente (es. il componente Navbar)
