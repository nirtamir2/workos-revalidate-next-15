
export default async function ServerComponentPage() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    if(!response.ok){
        throw new Error(response.statusText);
    }
    const data = await response.json();
    return (
        <div>
            <pre>{JSON.stringify(data,null, 2)}</pre>
        </div>
    );
};
