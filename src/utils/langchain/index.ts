import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

export async function createPRDescription(gitDiff: any) {
  console.log(gitDiff);
  const model = new OpenAI({});

  const template =
    "Please create a PR description for the following git diff {gitDiff}?";
  const prompt = new PromptTemplate({
    template: template,
    inputVariables: ["gitDiff"],
  });

  const chain = new LLMChain({ llm: model, prompt: prompt });

  const res = await chain.call({ gitDiff });

  console.log(res);
  return res.text;
}
