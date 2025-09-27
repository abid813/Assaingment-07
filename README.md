1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code inside JavaScript.

It makes React components easier to write, read, and understand.

2. What is the difference between State and Props?

State → Local data of a component that can change over time (mutable).

Props → Data passed from parent to child, read-only and cannot be modified by the child.

3. What is the useState hook, and how does it work?

useState is a React Hook that allows you to add state to functional components.

It returns an array [value, setValue], where value is the current state and setValue is used to update it.

4. How can you share state between components in React?

By lifting state up: keep state in a parent component and pass it down as props.

By using Context API or state management libraries (e.g., Redux, Zustand).

5. How is event handling done in React?

Event handlers are written in camelCase (e.g., onClick, onChange).

You pass functions as event handlers in JSX: