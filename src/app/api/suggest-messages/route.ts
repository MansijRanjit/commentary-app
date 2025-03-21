import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST() {
  const apiKey=process.env.GEMINI_API_KEY as string;

  const prompt ='Give me some random comments asking queries. The question should be friendly and interactive'
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return Response.json({success:true,message:result.response.text()},{status:200})
  } catch (error) {
    console.log('Error in suggesting message',error);
    return Response.json({success:false,message:'Error in suggesting message'},{status:500})
  }
}


