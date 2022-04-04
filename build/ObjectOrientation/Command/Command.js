"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
}
class CommandStack {
    constructor(_state) {
        this._state = _state;
        this.stack = [];
    }
    getState() {
        return this._state;
    }
    execute(command) {
        this._state = command.execute(this._state);
        this.stack.push(command);
    }
    undo() {
        const command = this.stack.pop();
        if (command) {
            this._state = command.undo(this._state);
        }
    }
}
class AddOne extends Command {
    execute(state) {
        return state + 1;
    }
    undo(state) {
        return state - 1;
    }
}
exports.default = () => {
    const cs = new CommandStack(0);
    console.log(cs._state);
    cs.execute(new AddOne());
    console.log(cs._state);
    cs.undo();
    console.log(cs._state);
};
