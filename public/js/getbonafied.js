
const getBonafied = () => {
    fetch("http://localhost:5000/api/getbonafied").then(res => res.json()).then(data => {
        alert(`Info\n${data.message}`)
    })
}