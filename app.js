

const uName = document.getElementById("Name")
const text = document.getElementById("Text")
const postList = document.getElementById("postList")
const button = document.getElementById("Button")
const date = new Date()



button.addEventListener("click", () => login())


function login() {
    const inputs = {
        "id": 0,
        "name": uName.value,
        "text": text.value,
        "dataPostagem": date

    }
    fetch("http://localhost:5018/api/Posts",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        }).then(() => {
            updateFront()

        })
        .catch(() => alert("Error"))

}


updateFront()

function updateFront() {
    fetch("http://localhost:5018/api/Posts")
        .then(e => e.json())
        .then(data => {
            let html = ""

            data.forEach(element => {
                const dataPost = element.dataPostagem
                html += `<div class = "postList">
                <div>${element.text}</div>
                <div>${element.name}</div>
                <div>${dataPost}</div>
                </div>`

            });
            postList.innerHTML = html
        })
        .catch(() => alert("Error"))
}




