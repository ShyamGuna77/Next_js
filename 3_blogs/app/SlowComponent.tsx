


async function SlowComponent () {
    await new Promise((resolve) => setTimeout(resolve,3000))
     return <p>Slow Component is loaded after 3 secs</p>
}

export default SlowComponent;