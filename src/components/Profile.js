const details = {
    name : "hoofa",
    age : 20,
    textColor : "blue"
}

const Profile = () => {
    return(
        <>
        <h1>{details.name}</h1>
        <h2>{details.age}</h2>
        <h2 style={{color: details.textColor}}>His Fav Color is {details.textColor}</h2>
        </>
    )
}
export default Profile