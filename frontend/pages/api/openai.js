import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export default async function Handler(req, res) {
    const { prompt } = req.body;

    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: prompt,
        max_tokens: 10,
        temperature: 0.1,
    });
    res.send(response)
}