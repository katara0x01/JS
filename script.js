async function DisplayData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        const postList = document.getElementById('postList');

        data.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = `Post ${post.userId}: ${post.id}: ${post.title}: ${post.body}: `;
            postList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error ', error);
    }
}
DisplayData();