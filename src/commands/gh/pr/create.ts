import { Args, Command, Flags } from "@oclif/core";
import { createPRDescription } from "../../../utils/langchain";
import { getCommitDiffs } from "../../../utils/git/commit-diifs";
const { exec } = require("child_process");

export default class GhPrCreate extends Command {
  static description = "describe the command here";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    // flag with no value (-f, --force)
    description: Flags.boolean({ char: "d" }),
  };

  static args = {
    file: Args.string({ description: "file to read" }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(GhPrCreate);

    if (flags.description) {
      try {
        const gitDiff = await getCommitDiffs();
        const prDescription = await createPRDescription();

        exec(
          `gh pr create --fill --title "Create PR from commits" --body "${
            prDescription!.output_text
          }"`,
          (error: any, stdout: any, stderr: any) => {
            if (error) {
              console.error(`Error: ${error.message}`);
              return;
            }
          }
        );
        this.log(prDescription!.output_text);
      } catch (error: any) {
        this.log(error);
      }
    }
  }
}
