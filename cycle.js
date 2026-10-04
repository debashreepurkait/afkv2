import { spawn } from "node:child_process";

const args = process.argv.slice(2);

function run() {
  console.log("Starting bot...");

  const child = spawn("node", ["bot.js", ...args], {
    stdio: "inherit"
  });

  setTimeout(() => {
    console.log("Stopping bot...");

    child.kill();

    setTimeout(() => {
      run();
    }, 2000);

  }, 2 * 60 * 1000);
}

run();