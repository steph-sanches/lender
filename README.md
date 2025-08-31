# Lender – Personal Loans & Items Tracker

Application fullstack pour **suivre ce que tu prêtes / empruntes** (argent, matériel, identifiants), avec:
- Front **Angular**
- Back **Spring Boot**,




## ✅ Prérequis
- Node.js (recommandé: **22 LTS**)
- Java **21** (LTS) + Maven
- Git


## 👮‍♂️ Convention commits

<type>(<scope>): <message>

    type → nature du changement

    scope → partie du projet (facultatif mais recommandé)

    message → court, à l’impératif

🔑 Types courants

    feat → nouvelle fonctionnalité

    fix → correction de bug

    docs → documentation uniquement

    style → mise en forme (indentation, espaces, etc.)

    refactor → modification de code sans changement fonctionnel

    test → ajout/modif de tests

    chore → tâches diverses (outils, build, config, dépendances)

## ▶️ Démarrage rapide

### Backend
```bash
cd loan-service
./mvnw spring-boot:run
# vérifie: http://localhost:8080/api/health  -> {"status":"ok"}


### FrontEnd

cd frontend
# dev proxy (à créer: proxy.conf.json pointant vers http://localhost:8080)
ng serve --proxy-config proxy.conf.json
# ouvre: http://localhost:4200
