### Questions

**What problem does the context API help solve?**

Context API allows you to avoid prop drilling.

**In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?**

The store holds state and the reducer function that changes state depending on what action is being passed through the action argument. Any component that needs state is able to get it from the store.

**What is the difference between Application state and Component state? When would be a good time to use one over the other?**

Application state refers to state that is application-wide, like when you're using the useReducer hook or Redux. Component state refers to managing state at the component level, like when you're using the useState hook. If a component is the only one that'll be using a specific state, then it makes sense to utilize a method of component state.

**Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?**

Thunk is a middleware for Redux that allows you to write action creators that return a function instead of an action. Thunk allows you to delay the dispatch of an action or dispatch an action only if a certain condition is met.

**What is your favorite state management system you've learned and this sprint? Please explain why!**

I think it depends on what project I'm working on. If the project is huge requires a state management system like Redux, then I will use that. But, if it's a smaller project, then I think using the useReducer hook and the useContext will be just fine.
