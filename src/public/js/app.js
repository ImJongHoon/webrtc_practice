const socket = new WebSocket(`ws://${window.location.host}`)

socket.addEventListener("open", () => {
    console.log("브라우저가 서버에 연결되었습니다!")
})

socket.addEventListener("message", (message)=>{
    console.log("서버로부터 받은 메세지: " + message.data)
})

socket.addEventListener("close", ()=>{
    console.log("서버와 연결이 끊어졌습니다.")
})