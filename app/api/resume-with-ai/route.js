import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function GET(req) {
    // Get PDF URL.
    const url = new URL(req.url);
    const pdf = url.searchParams.get("pdf");

    // Ask to OpenAI.
    const response = await openai.completions.create({
        model: "text-davinci-002",
        prompt: `Generame un resumen de este PDF: ${pdf}, extraeme las ideas principales del texto, dime para que sirve, extraeme los principales puntos y indicame a que tipo de comunidad científica pertenece. Y luego, traducemelo al Español`,
        max_tokens: 500,
        temperature: 0.8,
    });

    return NextResponse.json({
        text: response.choices[0].text,
    });
}
