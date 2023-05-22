// create a method that will return the diff of all the commits in the current branch

import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function getCommitDiffs() {
  const { stdout } = await execAsync("git diff main...HEAD");
  console.log({ stdout });
  return stdout.split("\n").filter(Boolean);
}

// Path: src/utils/git/commit.ts
