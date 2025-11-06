
// Quick script to generate an invite code using the admin route
const response = await fetch('https://f30c2164-774a-4462-812c-1324e0d79b6e-00-chdmn9da0lg5.kirk.replit.dev/api/admin/generate-invite', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    secret: process.env.ADMIN_SECRET || 'change-me-in-production'
  })
});

const data = await response.json();
console.log('\n=== Invite Code Generated ===');
console.log('Status:', response.status);
console.log('Response:', JSON.stringify(data, null, 2));

if (data.invite?.code) {
  console.log('\n✅ Your invite code:', data.invite.code);
  console.log('\nUse this code to register with Google OAuth');
}
