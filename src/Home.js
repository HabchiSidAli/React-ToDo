const Home = () => {

    const handleClick = () => {
        console.log ('hello, ninjas');
    }

    return ( 
        <div className="home">
            <h2>Home</h2>
            <button onClick={handleClick}>Click A me!</button>
        </div>
     );
}
 
export default Home;