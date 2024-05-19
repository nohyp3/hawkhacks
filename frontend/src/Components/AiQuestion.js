export async function checkAnswer(login, question, prewrittenAnswer, userAnswer) {
    // Dynamically import CohereClient
    const { CohereClient } = await import("cohere-ai");
    const axios = require('axios');
  
    const cohere = new CohereClient({
      token: "FDZGRUFzO3ChEAmnf76uJrPNHbIgV9ai8pTltdAS", // This is your trial API key
    });

    // default answer if user does not input anything
    if(userAnswer == "") {
        userAnswer = "I love dogs.";
    }
  
    const stream = await cohere.chatStream({
      model: "command-r-plus",
      message: "Are these two answers to the question \'" + question + "\' similar? Answer Yes or No." + "\n1. " + prewrittenAnswer + "\n2. " + userAnswer,
      temperature: 0.3,
      chatHistory: [{"role": "User", "message": "Are these two answers to the question \"What is a smart contract\" similar? Answer Yes or No\n1. Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined terms and conditions are met.\n2. Smart contracts are contracts connected to the chain and when conditions are filled, will run code to give the user cryptocurrency."}, {"role": "Chatbot", "message": "Yes."}, {"role": "User", "message": "Are these two answers to the question \"What is a smart contract\" similar? Answer Yes or No\n1. Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined terms and conditions are met.\n2. Smart contracts are edible and elephants use them to buy bitcoin."}, {"role": "Chatbot", "message": "No."}],
      promptTruncation: "AUTO",
      connectors: [{"id":"web-search"}]
    });
  
    let response = "";
  
    for await (const chat of stream) {
      if (chat.eventType === "text-generation") {
        response+=chat.text;
      }
    }
  
    response = response.toLowerCase().trim();
  
    if(response === "yes." || response === "yes") {
      axios.post('http://localhost:4000/api/updateLesson/', {
        email: login // replace with the actual email
      })
      .then((response) => {
          console.log(response.data);
      })
      .catch((error) => {
          console.error(`Error: ${error}`);
      });
      return 1;
    }
    else if(response === "no." || response === "no") {
      return 0;
    }
  }
  