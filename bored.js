const activityBox = document.getElementById('activity');
const button = document.getElementById('btn');

button.addEventListener('click', generateActivity);

 async function generateActivity() {
        try {
            const res = await fetch('https://www.boredapi.com/api/activity');
            const data = await res.json();

            if (data.error) {
                activityBox.innerHTML = 'Error: ' + data.error;
            } else {
                activityBox.innerHTML = data.activity;
            }
        } catch (error) {
            console.error('Error fetching activity:', error);
            activityBox.innerHTML = 'Error fetching activity. Please try again later.';
        }
    };
  

