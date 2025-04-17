# Git

## incializamos un Repositorio
- Configurar el usuario
``` bash
    git config --global user.name "Brian"
    git config --global user.email "brian.gonzalez@davinci.edu.ar"
```

- Inicio el repositorio
``` bash
git init
```
- Agrego los archivos

``` bash
    git add .
```

- Realizo el commit

``` bash
    git commit -m "Semana 02 - Modulos"
```

## Vinculamos GitHub con el repositorio local

``` bash
    git remote add origin https://github.com/Brian-web1999/Aplicaciones-hibridas-2025.git
```

- Subimos los commits
``` bash
    git push origin master
```
