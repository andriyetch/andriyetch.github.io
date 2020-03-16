window.onload = () => {
    document.getElementById('projects-item').addEventListener('click', () => {
        alert('this item is under construction');
    })

    document.getElementById('dorime-item').addEventListener('click', () => {
        window.location.href = './dorime.html';
    })

    document.getElementById('refsheet-item').addEventListener('click', () => {
        alert('this item is under construction');
    })

    document.getElementById('discord-item').addEventListener('click', () => {
        window.open('https://discord.gg/Yu5gZnp', '_blank');
    })
}