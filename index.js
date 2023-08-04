const ws = new WebSocket("ws://89.208.106.189/ws/socket-server/chat/1");

document.querySelector("button").addEventListener("click", () => {
    ws.send(JSON.stringify({
        message: document.querySelector("input").value,
    }))
})

ws.onmessage = async (e) => {
    const data = JSON.parse(e.data)
    document.querySelector("ul").innerHTML += `<li>${data.result.message}</li>`
    document.querySelector("input").value = ""
}


