#!/bin/bash
# Test script to check API errors

echo "Testing /api/diagnostic..."
curl -s "https://fullbodyworkout-1.onrender.com/api/diagnostic" | jq .

echo -e "\n\nYou need to get your auth token. Follow these steps:"
echo "1. Log in to your app in the browser"
echo "2. Open DevTools (F12) -> Application tab -> Local Storage"
echo "3. Find the key that contains 'supabase.auth.token'"
echo "4. Copy the 'access_token' value"
echo "5. Run this command with your token:"
echo ""
echo "TOKEN='your-access-token-here'"
echo "curl -s -H \"Authorization: Bearer \$TOKEN\" \"https://fullbodyworkout-1.onrender.com/api/completions\" | jq ."
