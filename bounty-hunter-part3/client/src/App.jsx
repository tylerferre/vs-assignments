import { useEffect, useState } from 'react'
import axios from "axios"
import AddBountyForm from './components/AddBountyForm'
import Bounties from './components/Bounties'


function App() {
  const [bountyData, setBountyData] = useState([])


  // GET
  const getBounty = () =>{
    axios.get('/api/bounty')
    .then(res => setBountyData(res.data))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getBounty()
  }, [])

  // POST
  const addBounty = (newBounty) => {
    axios.post('/api/bounty', newBounty)
    .then(res => {
      setBountyData(prevState => [...prevState, res.data])
    })
    .catch(err => console.log(err))
  }

  //DELETE
  const deleteBounty = (bountyId) => {
    axios.delete(`/api/bounty/${bountyId}`)
    .then(res => setBountyData(prevState => prevState.filter(item => item._id !== bountyId)))
    .catch(err => console.log(err))
  }

  // PUT
  const editBounty = (updates, bountyId) => {
    axios.put(`/api/bounty/${bountyId}`, updates)
    .then(res => {
      setBountyData(prevState => prevState.map(item => item._id !== bountyId ? item : res.data))
    })
  }

  const bountyCards = bountyData.map((item, index) => 
    <Bounties
      key={index}
      firstName={item.firstName}
      lastName={item.lastName}
      eliminated={item.eliminated}
      bountyAmount={item.bountyAmount}
      type={item.type}
      _id={item._id}
      deleteBounty={deleteBounty}
      editBounty={editBounty}
    />)

  return (
    <div className='App'>
      <h1 className='title'>Bounties</h1>
      <AddBountyForm addBounty={addBounty} />
      <section className='bountiesContainer'>
        {bountyCards}
      </section>
    </div>
  )
}

export default App
