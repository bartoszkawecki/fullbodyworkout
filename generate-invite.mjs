
// Quick script to generate an invite code using the admin route
const serverUrl = process.env.REPL_SLUG 
  ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
  : 'http://0.0.0.0:5000';

console.log(`Connecting to: ${serverUrl}`);

const response = await fetch(`${serverUrl}/api/admin/generate-invite`, {
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
} else if (data.message) {
  console.log('\n❌ Error:', data.message);
}
