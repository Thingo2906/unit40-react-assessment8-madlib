### Conceptual Exercise

Answer the following questions below:

- _What is React? When and why would you use it?_

* React is a JavaScript library for building user interfaces.
* React follows a component-based architecture, where the UI is divided into reusable and independent components that are composed together to create complex user interfaces.
* The reason we should use react:

1. React promotes the concept of reusable components, allowing you to break down the UI into smaller, self-contained pieces.
2. React utilizes a virtual DOM, which is an in-memory representation of the actual DOM. The virtual DOM allows React to efficiently update and render components by performing minimal updates to the real DOM.
3. React uses a declarative syntax, which means you describe how your UI should look based on the application state, and React takes care of updating the actual DOM to reflect those changes.
4. When the state or props of a component change, React intelligently determines what parts of the UI need to be updated and performs the minimum necessary changes. This optimization reduces unnecessary re-rendering and improves the overall performance of your application.

- _What is Babel?_

* Babel is a widely used JavaScript compiler that allows developers to write modern JavaScript code and transform it into a backward-compatible version that can run on older browsers or environments that may not support the latest JavaScript features.

- _What is JSX?_

* JSX stands for JavaScript XML. It is an extension to the JavaScript language syntax that allows you to write HTML-like code within JavaScript. JSX is commonly used with React, but it is not exclusive to React and can be used with other libraries or frameworks as well.

- _How is a Component created in React?_

* In React, a component is created by defining a JavaScript function or a class that returns a JSX element or a hierarchy of JSX elements. There are two common approaches to creating components in React: functional components and class components.

- _What are some difference between state and props?_
  state: is an array with 2 elements: an state value, and a function to set value for state.

* The value of state can be change , and when it change the component will re-render.
  Props: is an object that we can pass like an into component function, the value of the props can not be change.

1. Functional Components: Functional components are JavaScript functions that receive props (properties) as input and return JSX elements.
2. Class components are JavaScript classes that extend the React.Component class and define a render() method to return JSX elements.

- _What does "downward data flow" refer to in React?_

* Downward data flow" refers to the unidirectional flow of data in React from a parent component down to its child components. In React, data is typically passed from a parent component to its children through props.

- _What is a controlled component?_

* In React, a controlled component is a form input element (such as an input field, textarea, or select) whose value is controlled by the state of a React component.
* To create a controlled component, you typically follow these steps:

1. Define a state variable to hold the value of the input element. This can be done using the useState hook or by using a class component's state.

2. Set the value of the input element to the state variable using the value prop (or the defaultValue prop for an initial value).

3. Attach an onChange event handler to the input element that updates the state variable whenever the input value changes.

- _What is an uncontrolled component?_

* an uncontrolled component is a form input element (such as an input field, textarea, or select) that maintains its own internal state without being directly controlled by React's component state. The value of an uncontrolled component is managed by the DOM itself rather than being stored and updated in React's state.

- _What is the purpose of the `key` prop when rendering a list of components?_

* The key prop is a special attribute in React used when rendering a list of components or elements. It helps React identify each item in the list uniquely and efficiently update or reorder the components when the list changes.
* the key prop will sign an id for each element of the list of component.

- _Why is using an array index a poor choice for a `key` prop when rendering a list of components?_

* If the order of the list items can change, using the array index as the key prop can lead to incorrect rendering and reconciliation. When items are added, removed, or reordered in the list, React relies on the key prop to identify and track each component. If the key values are based on the array index, the components may not update or reorder correctly when the list changes, resulting in undesired behavior.

- _Describe useEffect. What use cases is it used for in React components?_

* useEffect has 2 elements: a function, and the array of dependences(optional)
* a function inside useEffect will run after the component mount, and it will run again if the value of dependences change.
* If we pass an emty array for dependences, the useEffect will only run 1 time after the component render at the first time.
* useEffect is a hook in React, a JavaScript library for building user interfaces. It allows you to perform side effects in functional components. Side effects refer to any action that affects something outside of the component, such as fetching data, subscribing to events, or manipulating the DOM.

-_What does useRef do? Does a change to a ref value cause a rerender of a component?_

- In React, the useRef hook is used to create a mutable reference that can persist across component renders. It returns a mutable ref object with a .current property that can hold a value. The value stored in a ref can be accessed and modified without triggering a component re-render.

* _When would you use a ref? When wouldn't you use one?_

- The useRef hook is commonly used for the following purposes:

1. Referencing DOM elements: When you need to access or manipulate a DOM element directly, you can use the useRef hook to create a ref, attach it to a DOM element using the ref attribute, and then access the element or its properties/methods through the ref.
2. Holding a value that persists across renders: Unlike state variables (created with useState), a change to the value of a ref does not trigger a component re-render. This makes it useful for storing values that should not trigger re-rendering but need to be accessed or updated across different renders of a component

- _What is a custom hook in React? When would you want to write one?_

* In React, a custom hook is a JavaScript function that utilizes one or more built-in hooks or other custom hooks to encapsulate and reuse stateful logic in functional components. Custom hooks allow you to extract and share common logic across multiple components, promoting code reuse and better organization.
* You would want to write a custom hook when you have a piece of logic that is reusable across multiple components. Custom hooks allow you to extract and centralize that logic, making it easier to maintain, test, and reuse in different parts of your application.
