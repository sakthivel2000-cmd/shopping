export const fetchProfile = async (userId: string) => {
  const response = await fetch(`http://localhost:5000/api/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch profile");
  return response.json();
};