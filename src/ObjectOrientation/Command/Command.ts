abstract class Command<State> {
  abstract execute(state:State): State;
  abstract undo(state:State):State;
}

class CommandStack<State>{
  private stack:Command<State>[] = [];
  constructor(private _state:State) {}

  getState() {
    return this._state;
  }

  execute(command: Command<State>) {
    this._state = command.execute(this._state);
    this.stack.push(command);
  }

  undo() {
    const command = this.stack.pop();
    if(command) {
      this._state = command.undo(this._state);
    }
  }
}

class AddOne extends Command<number> {
  execute(state:number) {
    return state + 1;
  }
  undo(state:number) {
    return state - 1;
  }
}

export default () => {
  const cs = new CommandStack<number>(0);
  console.log(cs._state);
  cs.execute(new AddOne());
  console.log(cs._state);
  cs.undo();
  console.log(cs._state);
}