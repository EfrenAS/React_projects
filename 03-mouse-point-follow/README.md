# Follow point the mouse

This is a simple example of how to follow the mouse pointer with a div, where learning how to use the `useEffect` hook.

## Clon the repo

```bash
git clone https://github.com/midudev/react-mouse-point-follow.git
```

## Run locally

Install all dependencies:

```bash
npm install
npm run dev
```

## Notes

- The `useEffect` hook is used to listen to the `mousemove` event and update the position of the div.
- Remenber when using `useEffect` to clean up the event listener when the component is unmounted, it does in the end of the `useEffect` hook and return a function to remove the event listener.
- The `useEffect` hook is called with an empty array as a depedency, so it will be called only once, when the component is mounted.

Example:

```js
useEffect(() => {
  console.log("I will be called only once");
}, []); // array dependencies is empty
```

- The `useEffect` hook is called again when the depedency changes and when the component is mounted once again.

Example:

```js
useEffect(() => {
  console.log("I will be called every time the component is mounted");
}, [dependencies]); // dependencies is an array
```

- The `useEffect` hook can be called multiple times when the component is rendered once.
  Example:

```js
useEffect(() => {
  console.log("I will be called every time the component is rendered");
}); // no dependencies
```

## References

- Youtube: [React useEffect hook](https://www.youtube.com/watch?v=qkzcjwnueLA&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=9) on midudev channel (in spanish) minute 1:36:57
- Youtube: [React useEffect hook](https://www.youtube.com/watch?v=qkzcjwnueLA&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=9) on midudev channel (in spanish) minute 1:54:48,dependencies array example
- Github repo: [React useEffect hook](https://github.com/midudev/preguntas-entrevista-react?tab=readme-ov-file)

- [useEffect hook](https://react.dev/reference/react/useEffect)
