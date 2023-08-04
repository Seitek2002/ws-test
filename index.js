const messageInput = document.querySelector(".message")
const uidInput = document.querySelector(".uid")

const ws = new WebSocket("ws://89.208.106.189/ws/socket-server/chat/1");

document.querySelector("button").addEventListener("click", () => {
    ws.send(JSON.stringify({
        message: messageInput.value,
    }))
})

ws.onmessage = async (e) => {
    const data = JSON.parse(e.data)
    document.querySelector("ul").innerHTML += `<li>${data.result.message}</li>`
    messageInput.value = ""
}


