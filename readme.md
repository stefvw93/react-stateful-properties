# react-stateful-properties

A decorator you can use to make your (ES or TypeScript) React Component class fields stateful. This makes your code more clean, and your component's local state easier to manage, implement and maintain.

## Example

```
import React from "react";
import stateful from "react-stateful-properties";

class MyComponent extends React.Component {
  @stateful count = 0;
}
```

## Installation

```
npm install react-stateful-properties
```

## Why?

Managing state in bigger React Component classes can be a tedious task that requires a considerable amount of lines of code. You could use hooks, but you lose the structure and readability that a class can offer, especially when creating multiple methods or event handlers.

Before:

```
import React from "react";
import stateful from "react-stateful-properties";

class MyComponent extends React.Component {
  state = {
    users: []
  }

  render() {
    return <div>
      {users.map(user => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  }

  componentDidMount() {
    fetch("api/users").then(res => {
      this.setState({
        users: res.data
      })
    })
  }
}
```

After:

```
import React from "react";
import stateful from "react-stateful-properties";

class MyComponent extends React.Component {
  @stateful users = [];

  render() {
    return <div>
      {users.map(user => (
        <div key={user.id}>
          {user.name}
        </div>
      ))}
    </div>
  }

  componentDidMount() {
    fetch("api/users").then(res => this.users = res.data)
  }
}
```
