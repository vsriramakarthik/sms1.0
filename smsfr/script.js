document.getElementById('smsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const responseElement = document.getElementById('response');
  
    try {
      const response = await fetch('http://localhost:3000/send-sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: phone, message: message }),
      });
  
      if (response.ok) {
        responseElement.textContent = 'SMS sent successfully!';
        responseElement.style.color = 'green';
      } else {
        const error = await response.json();
        responseElement.textContent = `Error: ${error.error}`;
        responseElement.style.color = 'red';
      }
    } catch (error) {
      responseElement.textContent = `Failed to send SMS: ${error.message}`;
      responseElement.style.color = 'red';
    }
  });
  