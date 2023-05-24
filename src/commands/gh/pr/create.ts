import { Args, Command, Flags } from "@oclif/core";
import { createPRDescription } from "../../../utils/langchain";
import { getCommitDiffs } from "../../../utils/git/commit-diifs";
import { parsePRDescription } from "../../../utils/git/parsePrDescription";
const { exec } = require("child_process");

export default class GhPrCreate extends Command {
  static description =
    "This command creates a Pr with title and description based on your commits";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    // flag with no value (-f, --force)
    description: Flags.boolean({ char: "d" }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(GhPrCreate);

    if (flags.description) {
      try {
        const gitDiff = await getCommitDiffs();
        const prDescription = await createPRDescription();
        const parsedDescription = parsePRDescription(
          prDescription!.output_text
        );

        exec(
          `gh pr create --fill --title "${parsedDescription.title}" --body "${
            parsedDescription!.description
          }"`,
          (error: any, stdout: any, stderr: any) => {
            this.log(`
              PR Created Sucessfully
              ${stdout}
            `);
            if (error) {
              this.error(`error: ${error.message}`);
              return;
            }
          }
        );
        return;
      } catch (error: any) {
        this.log(error);
      }
    }
  }
}
