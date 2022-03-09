
export const loadContract = async (name, web3) => {
    const res = await fetch(`/contracts/${name}.json`)
    const Artifact = await res.json()
    let contract = null
  
    try {
      contract = new web3.eth.Contract(
        Artifact.abi,
        Artifact.networks[1337].address
      )
    } catch {
      console.log(`Contract ${name} cannot be loaded`)
    }
  
    return contract
  }