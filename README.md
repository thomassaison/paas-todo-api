## Instructions pour les TPs

### Pré-requis
- Npm, Node, Nvm

## TP0 : CLI Scalingo
1. Installer le CLI Scalingo `# curl -O https://cli-dl.scalingo.com/install && bash install`
2. Créer compte sur [dashboard.scalingo.com](dashboard.scalingo.com) (via GitHub)
3. Générer une paire de clés dans `~/.ssh` `ssh-keygen -t ed25519` si vous en avez déjà vous pouvez skipper
4. Ajouter la clé publique sur l'interface Scalingo dans `Settings > Authentication > SSH Keys`
5. S'authentifier `$ scalingo login`



## TP1 : MEP Hello World!
1. Forker et cloner ce projet
2. Y naviguer en local `cd paas-todo-api`
3. Créer un fichier `.env` en copiant le contenu de `.env.template`
4. Lancer l'application en local et s'assurer qu'elle fonctionne (Hello World!)
   1. `nvm install && nvm use`
   2. `npm install`
   3. `npm run start` 
5. Initialiser l'application Scalingo locale `scalingo create todo-api-[polygramme]`
6. Déployer sur Scalingo `git push scalingo master` et afficher le Hello World!
