const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: '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'  })

export default async (req, res) => {
  let prompt = 'node js code for login';
  console.log(prompt,'prompt')
  const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: prompt,
  max_tokens: 100,
  temperature: 0.9,
});

  res.status(200).json({text: `${response.data.choices[0].text}`})
}