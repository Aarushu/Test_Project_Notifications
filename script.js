const button = document.querySelector("button")

button.addEventListener("click", () => {
  Notification.requestPermission().then(perm => {
  if (perm === "granted") {
    const notification = new Notification("Example notification", {
        body: "This is more Text",
        data: {hello: "World"},
        icon: "Logo Centered.png",
        tag: "Welcome Message",
        vibrate: "300, 100, 300, 100, 300",
    })

    notification.addEventListener("error", e => {
        alert("error")
    })
       if (perm === "granted") {

    }
  }
})
})

let notification
let interval
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
       const leaveDate = new Date()
       interval = setInterval(() => {
       notification = new Notification("Come back please", {
            body: `You have been gone for ${Math.round((new Date() - leaveDate) / 1000)} seconds`,
            tag: "Come back",
        })
    }, 100)
    } else {
        if (interval) clearInterval(interval)
        if (notification) notification.close()
    }
})
