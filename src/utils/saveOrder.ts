import { SaveOrderParams } from "@/pages/CheckoutPage";

export async function saveOrder(order: SaveOrderParams) {
  const response = await fetch("http://localhost:5000/api/save-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (!response.ok) throw new Error("Failed to save order");
  return response.json();
}