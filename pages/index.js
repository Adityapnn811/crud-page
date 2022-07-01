import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/searchBar'
import SmallDropdown from '../components/SmallDropdown'
import DataCard from '../components/dataCard'
import { useState, useEffect } from 'react'
import {UpdateToken} from './api/getToken'

const data1 = [
  {
    "id": 2055,
    "name": "Dr. Dejon Pacocha",
    "address": "1400 Simonis Stream Apt. 276\nEast Lindsey, WA 10870",
    "country": "Papua New Guinea",
    "phone_number": "+1-351-524-4006",
    "job_title": "Movie Director oR Theatre Director",
    "status": false,
    "created_at": "2022-05-31T08:42:58.000000Z",
    "updated_at": "2022-05-31T08:42:58.000000Z"
  }
]

export default function Home() {
  const [data, setData] = useState(null)
  const [token, setToken] = useState(null)
  const [filter, setFilter] = useState("Both")
  const [sort, setSort] = useState("Default")
  UpdateToken(setToken)
  const getData = async () => {
    await fetch("https://mitramas-test.herokuapp.com/customers", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then((res) => {
      res.json().then((res2) => {
        setData(res2.data)
      }).catch((err) => {
        console.log(err)
      })
    })
  }
  getData()
  // console.log(data)
  console.log(sort)
  console.log(filter)
  return (
    <div className='h-fit w-full flex flex-1'>
      <Head>
        <title>Mitramas Infosys Group</title>
        <meta name="description" content="Manage data" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;800&family=Ramaraja&display=swap" rel="stylesheet"/> 
      </Head>
      <main className='flex flex-1 flex-col justify-center items-center h-fit bg-primary'>
        <h1 className='text-4xl m-8'>Mitramas Infosys Global</h1>
        <SearchBar/>
        <div className='flex flex-row'>
          <SmallDropdown text="Filter status" value={["Both", "True", "False"]} setValue={setFilter} id={"filter-dropdown"}/>
          <SmallDropdown text="Sort name" value={["Default", "Ascending", "Descending"]} setValue={setSort} id={"sort-dropdown"}/>
        </div>
        <div className='flex flex-col justify-center my-3'>
          {data && data.map((data, index) => {
            if(filter !== "Both"){
              if(filter === "True"){
                if(data.status === true){
                  return <DataCard data={data} key={index}/>
                }
              } else {
                if(data.status === false){
                  return <DataCard data={data} key={index}/>
                }
              }
            }
            else {
              return <DataCard data={data} key={index}/>
            }
            })}
        </div>
      </main>
    </div>
  )
}
