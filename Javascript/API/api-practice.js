async function getData() {
    try {
        const response = await fetch("API_URL");

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

getData();