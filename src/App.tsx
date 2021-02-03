import React from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';

let aa: number | null = 10 // a может быть и числом и null
aa = null

let names: Array<string> = ["loh", "Boh", "Kroh"]
let names2: string[] = ["loh", "Boh", "Kroh"] // то же самое массивы строк


let sex: "male" | "female"
sex = 'female'
// sex = 'man' - Mistake 

let object = {
  name: 'loh',
  surname: 1,
  age: 'ofEmpires'
}
// object.age = 1 - mistake
// object.sex - mistake

type UserType = {
  sayHello?: (message: string) => void, // "?"- unnecessary
  name?: 'loh',           // ask if it necessary or not
  age?: 'darks',
  number?: 'string',
  string: 1,
  some: string | null
}

let user: UserType = {
  sayHello(message: string) {alert('ss')}  ,          // function lives matters (мы можем захардить то , что будет принимать функция)
  string: 1,             //string shoud exist in user otherwise this wont work
  some: null
}

const sum = (a: number, b: number) => {
  return a + b
}
// sum(10, '20') --- uuuu shall not pass.  whoever the fuck are u ??

let nothing
nothing = 10 // nothing will understand who's in charge now after first use

const sum1 = (a: any, b: any) => { // why the heck u uploaded TS if u don't care (any)
  return a + b
}

export type userTypePipe = typeof user
let state: userTypePipe = {
  string: 1,
  some: 'string'
}
let GET_TASKS = "APP?GetTASKS"
type GetTasksActionType = {
  id: number,
  type: typeof GET_TASKS
}
let action = {
  type: GET_TASKS,
  id: 12
}


function App() {
  return (
    <div className="App">
      <div>LOL</div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
