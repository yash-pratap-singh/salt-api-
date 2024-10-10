async function sendRequest() {
    const callbackURL = "https://yash-pratap-singh.github.io/salt-api-/";
    const promptText = document.getElementById('prompt').value;

    const apiUrl = 'https://salt-api-prod.getsalt.ai/api/v1/deployments/c97da732-8dc6-49f7-9713-303425d4a5d9/executions/';

    const requestBody = {
        "callback": callbackURL,
        "workflow_input": {
            "Prompt": {
                "value": promptText,
                "value_type": "RAW"
            }
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonResponse = await response.json();
        document.getElementById('responseData').textContent = JSON.stringify(jsonResponse, null, 2);
    } catch (error) {
        document.getElementById('responseData').textContent = `Error: ${error.message}`;
    }
}
