 const hora = () =>`${new Date().getHours()}:${new Date().getMinutes() < 10 ? "0" + new Date().getMinutes():new Date().getMinutes()}`;

 export default hora