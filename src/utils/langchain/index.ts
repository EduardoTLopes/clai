import "dotenv/config";
import { OpenAI } from "langchain/llms/openai";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RetrievalQAChain, loadQARefineChain } from "langchain/chains";
import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { getCommitDiffs } from "../git/commit-diifs";

export async function createPRDescription() {
  const embeddings = new OpenAIEmbeddings();
  const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    maxTokens: 1000,
  });

  const commitDiffs = await getCommitDiffs();
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
  });
  const docs = await splitter.splitDocuments([
    new Document({
      pageContent: commitDiffs,
    }),
  ]);
  const store = await MemoryVectorStore.fromDocuments(docs, embeddings);

  const chain = loadQARefineChain(model);

  const question = `Create a PR description for my Diffs,in the following format:
    [Type of change]
    
    [DESCRIPTION]

    [Motivation and Context]

    `;
  const relevantDocs = await store.similaritySearch(question);

  try {
    const response = await chain.call({
      input_documents: relevantDocs,
      question,
    });
    return response;
  } catch (error: any) {
    console.log(error);
  }
}
