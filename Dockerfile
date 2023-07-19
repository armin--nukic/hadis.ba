# Koristi nginx sliku kao osnovu
FROM nginx:latest

# Kopiraj sve datoteke u direktorij web stranice unutar kontejnera
COPY . /usr/share/nginx/html/novihadis.com

# Postavi radni direktorij unutar kontejnera
WORKDIR /usr/share/nginx/html/novihadis.com

# Izloži port 5500
EXPOSE 5500

# Pokreni nginx server unutar kontejnera
CMD ["nginx", "-g", "daemon off;"]
