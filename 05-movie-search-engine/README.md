# Move Search Engine

## Description

A movie search engine that allows users to search for movies by title, genre, and release year. This App was created when I was learning React with Midudev's course.

## What's learning in this project?

- React Hooks
  - useRef .- Is a hook that allow to save a mutable reference that persists all life cycles of the component.
  - useMemo .- Memorizes the return value of a function. This is useful for functions that return complex objects or arrays and not calculated again with the same arguments.
  - useCallback .- Memoizes a function, but will only recalculate if the dependencies change, it is same to useMemo but with a function.
- Fetching data from an API
- Learn how to solve a debounce problem.

## Setup

1.- clone the repo

```bash
git clone https://github.com/efren/MovieSearchEngine.git
```

2.- install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Statements

Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/ Consigue la API Key en la propia página web registrando tu email.

Endpoint de la API: - https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=Ted+The+Matrix&type=movie

OMDb_API_KEY = f4133c37

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)
