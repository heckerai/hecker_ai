import { ChatCompletionMessageParam } from "openai/resources";

export type OpenAIContextType = {
    [key: string]: {
        messages: ChatCompletionMessageParam[];
    };
};
