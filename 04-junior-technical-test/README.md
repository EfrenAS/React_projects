# Prueba técnica para Juniors y Trainees de React (Midudev) en Live Coding

## Sobre el proyecto

- Recuperar un hecho aleatorio de gatos desde la API de [The Cat API](https://catfact.ninja/fact)
- Mostrar una imagen de un gato con la primera palabra del hecho aleatorio, de la API de [The Cat API](https://cataas.com/cat/says/hello)

## ¿Cómo ejecutar el proyecto?

Primero, debes instalar las dependencias necesarias:

```bash
npm install
```

Una vez instaladas las dependencias, puedes ejecutar el proyecto en modo desarrollo con:

```bash
npm run dev
```

Esto abrirá un servidor en el puerto 5173 y se mostrará el proyecto en la ruta `http://localhost:5173/`.

## Implementación

Utilizamos los siguientes hooks de React:

- `useEffect`: Utilizado para realizar llamadas a la API de catfact y a cataas.
- `useState`: Utilizado para almacenar el hecho aleatorio de gatos y la imagen de un gato.
- `custom hook`: Utilizado para separar los hooks de la aplicación en dos archivos independientes.
