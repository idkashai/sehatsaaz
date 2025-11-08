import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult } from '../types';

// FIX: Initialize GoogleGenAI directly with process.env.API_KEY and remove key check per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const model = 'gemini-2.5-flash';

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        disclaimer: {
            type: Type.STRING,
            description: "A mandatory medical disclaimer in English stating this is not medical advice and a doctor must be consulted."
        },
        overallAssessment: {
            type: Type.OBJECT,
            properties: {
                english: { type: Type.STRING, description: "A one-paragraph summary of the report in simple English." },
                urdu: { type: Type.STRING, description: "A one-paragraph summary of the report in simple Urdu." }
            },
            required: ["english", "urdu"]
        },
        severity: {
            type: Type.STRING,
            enum: ["Green", "Yellow", "Red"],
            description: "A severity score: 'Green' (safe/normal), 'Yellow' (caution/some abnormal values), 'Red' (urgent attention needed/critical values)."
        },
        severityReasoning: {
            type: Type.OBJECT,
            properties: {
                english: { type: Type.STRING, description: "A brief explanation for the severity score in English." },
                urdu: { type: Type.STRING, description: "A brief explanation for the severity score in Urdu." }
            },
            required: ["english", "urdu"]
        },
        findings: {
            type: Type.ARRAY,
            description: "An array of all key medical tests found in the report.",
            items: {
                type: Type.OBJECT,
                properties: {
                    testName: { type: Type.STRING, description: "The name of the test (e.g., 'Hemoglobin', 'Bilirubin')." },
                    value: { type: Type.STRING, description: "The value of the test result from the report." },
                    unit: { type: Type.STRING, description: "The unit of measurement (e.g., 'g/dL', 'mg/dL')." },
                    normalRange: { type: Type.STRING, description: "The normal reference range for this test." },
                    isAbnormal: { type: Type.BOOLEAN, description: "True if the value is outside the normal range, otherwise false." },
                    interpretation: {
                        type: Type.OBJECT,
                        properties: {
                            english: { type: Type.STRING, description: "A simple, one-sentence explanation of what this test measures and what the result means in English." },
                            urdu: { type: Type.STRING, description: "A simple, one-sentence explanation of what this test measures and what the result means in Urdu." }
                        },
                        required: ["english", "urdu"]
                    }
                },
                required: ["testName", "value", "unit", "normalRange", "isAbnormal", "interpretation"]
            }
        }
    },
    required: ["disclaimer", "overallAssessment", "severity", "severityReasoning", "findings"]
};

const prompt = `You are "SehatSaaz," an expert AI health assistant designed for users in Pakistan with low literacy. Your task is to analyze an image of a medical lab report.

**CRITICAL RULES:**
1.  **You are NOT a doctor.** You provide informational assessments, not diagnoses. Start every single analysis with the exact disclaimer specified in the JSON schema.
2.  **Simplify, simplify, simplify.** Convert all medical jargon into simple, easy-to-understand language in both English and Urdu.
3.  **Perform OCR:** Carefully extract text and values from the lab report image, even if it's blurry or poorly printed.
4.  **Analyze Values:** Compare extracted values against standard medical ranges.
5.  **Provide Dual Language Support:** All user-facing explanations must be in both simple English and simple Urdu.
6.  **Assign Severity:** Use the "Green, Yellow, Red" system to indicate urgency.
7.  **Strictly follow the JSON output format.** Your entire response must be a single, valid JSON object that conforms to the provided schema. Do not output anything else.

Analyze the provided lab report image and return the data in the specified JSON format.`;


export const analyzeLabReport = async (base64Image: string): Promise<AnalysisResult> => {
    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: {
                parts: [
                    { text: prompt },
                    {
                        inlineData: {
                            mimeType: 'image/jpeg',
                            data: base64Image,
                        },
                    },
                ],
            },
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
            },
        });

        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText);
        return result as AnalysisResult;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to get a valid analysis from the AI model.");
    }
};