import { commadExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

import type { CLICommand } from "./command.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exits the Pokedex",
      callback: commadExit,
    },
  };
}
