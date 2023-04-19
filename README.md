## Primeros pasos

Para construir y ejecutar la aplicación deberemos clonar el repositorio `podcasts` e instalar sus dependencias. Para clonar el repositorio es necesario tener instalado Git, puedes obtenerlo en http://git-scm.com/. Para instalar las dependencias es necesario tener instalado un gestori de dependencias como [npm][npm] o [yarn][yarn].

### Clonar el repositorio

Para clonar el repositorio se debe ejecutar la siguiente instrucción:

```
git clone https://github.com/cristiams/podcast.git
```

### Instalar las dependencias

Para instalar las dependencias primero nos situaremos en la raíz del proyecto (donde se encuentra el `package.json`):

```
cd podcasts
```
Llegados a este punto lo único que faltaría sería instalar las dependencias, para ello:

```
yarn install
```
o
```
npm install
```

## Ejecución de la aplicación
Tenemos dos modos de ejecución de la aplicación, modo _development_ y modo _production_. En el modo _development_ los assets se sirven sin minimizar y en el modo _production_ se sirven concatenados y minimizados.

### Modo _development_

Para ejecutar la aplicación en modo desarrollo debemos situarnos en la raíz del proyecto (donde se encuentra el fichero `package.json`) y ejecutar la siguiente orden:

```
yarn run dev
```
o
```
npm run dev
```

Esto iniciará un servidor local de desarrollo. Haz clic en http://localhost:5173/ para visualizar la SPA en tu navegador. El modo _development_ permite recargar la página en el momento que salvas los cambios realizados en el código.

### Modo _production_

Para ejecutar la aplicación en modo producción debemos situarnos en la raíz del proyecto (donde se encuentra el fichero `package.json`) y ejecutar la siguiente orden:

```
yarn run build
```
o
```
npm run build
```

Esta orden construye la aplicación minificada generando ficheros estáticos para producción optimizados para un mejor rendimiento y los coloca en el directorio `build`.

La forma más rápida de comenzar es simplemente ejecutar `npx serve` en el directorio de su proyecto.

Si lo prefiere, también puede instalar el paquete globalmente (necesitará al menos [Node LTS](https://github.com/nodejs/Release#release-schedule)):

```bash
> npm install --global serve
```

Una vez hecho esto, puede ejecutar este comando dentro del directorio de su proyecto...

```bash
> serve
```
