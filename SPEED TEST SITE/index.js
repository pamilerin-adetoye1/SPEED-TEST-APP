document.getElementById('start-test').addEventListener('click', () => {
  const testFileUrl = 'https://docs.google.com/document/d/1-0ixXo3GB6NhLi_Y0p-kAa2SZgBRwrFxjd-I7zyKSfA/edit?usp=sharing'; // Replace with a small test file URL
  const startTime = Date.now();

  fetch(testFileUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network error');
      }
      return response.blob();
    })
    .then(blob => {
      const endTime = Date.now();
      const fileSizeInBits = blob.size * 8; // Convert bytes to bits
      const durationInSeconds = (endTime - startTime) / 1000; // Time in seconds
      const speedMbps = (fileSizeInBits / durationInSeconds) / (1024 * 1024); // Convert to Mbps

      document.getElementById('speed').textContent = speedMbps.toFixed(2);
    })
    .catch(error => {
      document.getElementById('speed').textContent = 'Error';
      console.error('Speed test failed:', error);
    });
});
