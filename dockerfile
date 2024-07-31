# Utilisez une image node officielle avec la version 20.11.1 comme image de base
FROM node:20.11.1 AS build

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances du projet
RUN npm install

# Copiez tous les fichiers du projet dans le répertoire de travail
COPY . .

# Construisez l'application Angular
RUN npm run build --prod

# Vérifiez le contenu du répertoire de build
RUN ls -la /app/dist/admin-backoffice

# Utilisez une image nginx officielle pour servir l'application
FROM nginx:alpine

# Copiez les fichiers de build de l'étape précédente vers le répertoire de nginx
COPY --from=build /app/dist/admin-backoffice /usr/share/nginx/html

# Exposez le port 80
EXPOSE 80

# Commande pour lancer nginx
CMD ["nginx", "-g", "daemon off;"]
