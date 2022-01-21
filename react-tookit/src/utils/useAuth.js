export const connectWallet = async() =>{
    if(typeof window.ethereum != 'undefined'){
       const [account] =  await window.ethereum.request({ method: 'eth_requestAccounts' })
    return account.toString();
    }else{
        alert('Install Metamask!!')
        return null;
    }
}



