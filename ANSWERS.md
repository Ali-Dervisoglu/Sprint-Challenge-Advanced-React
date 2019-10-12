- [ ] Why would you use class component over function components (removing hooks from the question)?

It makes it possible to use the methods from the component lifecycle.

- [ ] Name three lifecycle methods and their purposes.

The Render Method: is a lifecycle method that tells react when this method is called, it returns a piece of DOM.
componentDidMount: is a lifecycle method that is called as soon as the component mounts. Useful for API calls.
componentDidUpdate: is a lifecycle method that is called as soon as the updating of the component happens. It is used for updating the dom in response to prop or state changes.

- [ ] What is the purpose of a custom hook?

To share stateful and side-effectful functionality between components.

- [ ] Why is it important to test our apps?

Because it minimizes the chance of a bug happening.