import { Args, Command, Flags } from "@oclif/core";
import { createPRDescription } from "../../../utils/langchain";
import { getCommitDiffs } from "../../../utils/git/commit-diifs";

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
      const gitDiff = await getCommitDiffs();
      const prDescription = await createPRDescription(gitDiff);
      this.log("test");
    }
  }
}
