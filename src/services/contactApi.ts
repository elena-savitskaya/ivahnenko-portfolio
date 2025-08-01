import { ContactFormData } from "@/schemas/contactSchema";

export async function sendContactForm(data: ContactFormData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Помилка надсилання");
  }

  return res.json();
}
