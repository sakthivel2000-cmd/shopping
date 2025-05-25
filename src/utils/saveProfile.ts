export async function saveProfile(details: {
  userId: string;
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}) {
  const response = await fetch('http://localhost:5000/api/save-profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(details),
  });

  if (!response.ok) {
    throw new Error('Failed to save profile');
  }

  return response.json();
}

